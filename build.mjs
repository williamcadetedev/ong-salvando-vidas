import {
    readFile,
    writeFile,
    mkdir,
    readdir,
    cp
} from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { rollup } from "rollup";
import { minify as minificarJS } from "terser";
import { minify as minificarHTML } from "html-minifier-terser";
import CleanCSS from "clean-css";

// Usa a pasta do projeto como referência.
process.chdir(fileURLToPath(new URL(".", import.meta.url)));

// Cria as pastas de saída.
for (const pasta of ["html", "css", "JS"]) {
    await mkdir(`producao/${pasta}`, { recursive: true });
}

// Reúne os módulos JavaScript e reduz o código.
const pacote = await rollup({
    input: "JS/main.js"
});

const { output } = await pacote.generate({
    format: "es"
});

await pacote.close();

const javascript = await minificarJS(output[0].code, {
    module: true,
    compress: true,
    mangle: true
});

await writeFile("producao/JS/main.js", javascript.code);

// Reduz o CSS.
const cssOriginal = await readFile("css/estilos.css", "utf8");
const cssReduzido = new CleanCSS({
    level: 1
}).minify(cssOriginal);

if (cssReduzido.errors.length > 0) {
    throw new Error(cssReduzido.errors.join("\n"));
}

await writeFile("producao/css/estilos.css", cssReduzido.styles);

// Reduz todas as páginas HTML.
const arquivos = await readdir("html");

for (const arquivo of arquivos) {
    if (!arquivo.endsWith(".html")) continue;

    const htmlOriginal = await readFile(`html/${arquivo}`, "utf8");

    const htmlReduzido = await minificarHTML(htmlOriginal, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
    });

    await writeFile(`producao/html/${arquivo}`, htmlReduzido);
}

// Copia as imagens. A otimização delas será feita separadamente.
await cp("imagens", "producao/imagens", {
    recursive: true
});

console.log("Versão de produção criada com sucesso!");