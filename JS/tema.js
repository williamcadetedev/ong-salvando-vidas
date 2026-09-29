(() => {
    const botao = document.getElementById("alternar-tema");
    const pagina = document.documentElement;
    const preferenciaSistema = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    let temaSalvo = null;

    try {
        temaSalvo = localStorage.getItem("tema");
    } catch {
        // A alternância funciona mesmo sem acesso ao armazenamento.
    }

    let escolhaManual =
        temaSalvo === "escuro" || temaSalvo === "claro";

    function aplicarTema(escuro) {
        pagina.dataset.tema = escuro ? "escuro" : "claro";
        botao.setAttribute("aria-pressed", String(escuro));
        botao.textContent = escuro
            ? "Ativar modo claro"
            : "Ativar modo escuro";
    }

    aplicarTema(
        escolhaManual
            ? temaSalvo === "escuro"
            : preferenciaSistema.matches
    );

    botao.addEventListener("click", () => {
        const escuro = pagina.dataset.tema !== "escuro";

        escolhaManual = true;
        aplicarTema(escuro);

        try {
            localStorage.setItem(
                "tema",
                escuro ? "escuro" : "claro"
            );
        } catch {
            // Mantém o tema ativo nesta visita.
        }
    });

    preferenciaSistema.addEventListener("change", (evento) => {
        if (!escolhaManual) {
            aplicarTema(evento.matches);
        }
    });
})();