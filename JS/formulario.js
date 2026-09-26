import { templateCadastro } from "./templates.js";
function validarCpf(cpf) {
    const numeros = cpf.replace(/\D/g, "");

    if (numeros.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(numeros)) {
        return false;
    }

    function calcularDigito(quantidade) {
        let soma = 0;

        for (let i = 0; i < quantidade; i++) {
            soma += Number(numeros[i]) * (quantidade + 1 - i);
        }

        const resto = soma % 11;

        return resto < 2 ? 0 : 11 - resto;
    }

    const primeiroDigito = calcularDigito(9);

    if (primeiroDigito !== Number(numeros[9])) {
        return false;
    }

    const segundoDigito = calcularDigito(10);

    return segundoDigito === Number(numeros[10]);
}

export function configurarFormulario() {
    const formulario = document.querySelector("#form-cadastro");
    const toast = document.querySelector("#toast");

    if (formulario && toast) 
    {
             function mostrarToast(mensagem, tipo) {
            toast.textContent = mensagem;
            toast.className = `${tipo} mostrar`;

            setTimeout(function () {
                toast.classList.remove("mostrar");
                }, 3000);
                }

            formulario.addEventListener("submit", function (evento) {
                evento.preventDefault();

                mostrarToast(
            "Formulário enviado com sucesso!",
            "sucesso"
                );

            formulario.reset();
                 });

            formulario.addEventListener("invalid", function () {
            mostrarToast(
            "Verifique os campos do formulário.",
            "erro"
                 );
                }, true);
         }
}
export function mostrarCadastro() {
    const conteudo = document.querySelector("#conteudo");

    conteudo.innerHTML = templateCadastro();
    configurarFormulario();

    const campoTelefone = conteudo.querySelector("#telefone");
    const campoCpf = conteudo.querySelector("#cpf");

    campoTelefone.addEventListener("input", function () {
        const numeros = campoTelefone.value
            .replace(/\D/g, "")
            .slice(0, 11);

        if (numeros.length === 0) {
            campoTelefone.value = "";
        } else if (numeros.length <= 2) {
            campoTelefone.value = `(${numeros}`;
        } else if (numeros.length <= 7) {
            campoTelefone.value =
                `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
        } else {
            campoTelefone.value =
                `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
        }
    });

    campoCpf.addEventListener("input", function () {
        const numeros = campoCpf.value
            .replace(/\D/g, "")
            .slice(0, 11);

        if (numeros.length <= 3) {
            campoCpf.value = numeros;
        } else if (numeros.length <= 6) {
            campoCpf.value =
                `${numeros.slice(0, 3)}.${numeros.slice(3)}`;
        } else if (numeros.length <= 9) {
            campoCpf.value =
                `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6)}`;
        } else {
            campoCpf.value =
                `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6, 9)}-${numeros.slice(9)}`;
        }

        if (campoCpf.value === "") {
            campoCpf.setCustomValidity("");
        } else if (!validarCpf(campoCpf.value)) {
            campoCpf.setCustomValidity("Digite um CPF válido.");
        } else {
            campoCpf.setCustomValidity("");
        }
    });
}