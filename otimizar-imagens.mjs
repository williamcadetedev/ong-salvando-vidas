import sharp from "sharp";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

process.chdir(fileURLToPath(new URL(".", import.meta.url)));

const original = "imagens/logo.png";
const tamanhoOriginal = (await stat(original)).size;

for (const largura of [100, 200, 300]) {
    const destino = `imagens/logo-${largura}.webp`;

    await sharp(original)
        .resize({ width: largura })
        .webp({ lossless: true })
        .toFile(destino);

    const tamanhoFinal = (await stat(destino)).size;
    const reducao = (1 - tamanhoFinal / tamanhoOriginal) * 100;

    console.log(
        `${destino}: ${tamanhoFinal} bytes — redução de ${reducao.toFixed(2)}%`
    );
}