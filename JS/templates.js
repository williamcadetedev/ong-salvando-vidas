export function templateInicio() {
    return `
        
                <h2> Juntos por um mundo melhor </h2>
                <p> Acreditamos no poder da solidariedade para transformar realidades e construir um futuro mais digno para todos. </p>

            <article>

                <h3> Quem somos </h3>
                <p> Somos uma organização sem fins lucrativos que atua há mais de 10 anos promovendo impacto social positivo. </p>

            </article>

            <article>   

                <h3> O que fazemos </h3>
                <p> Desenvolvemos projetos educativos, socioambientais e de inclusão para comunidades em situação de vulnerabilidade. </p>

            </article>

            <article>               
                <h3> Como ajudar </h3>    

                <p> Você pode fazer a diferença! Doe, seja voluntário ou compartilhe nossa causa. </p>

            </article>

            <aside>

                <h3> Entre em contato </h3>

                <p><strong>Telefone:</strong> (83) 99999-9999</p>
                <p><strong>E-mail:</strong> contato@salvandovidas.org</p>
                <p><strong>Endereço:</strong> João Pessoa - PB</p>

            </aside>
    `;
}

function templateProjeto(projeto) {
    return `
        <article id="${projeto.id}">
            <span class="badge">${projeto.badge}</span>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `;
}
export function templateProjetos() {
    return `
        <h2>Nossos projetos</h2>
        <p>Conheça algumas das iniciativas que desenvolvemos para gerar impacto positivo na vida de centenas de pessoas.</p>
        ${projetos.map(templateProjeto).join("")}
    `;
}

export function templateCadastro() {
    return `
        <h2> Cadastre-se </h2>
           <p class="alerta" id="instrucoes-cadastro">
                <strong>Atenção:</strong>
                Todos os campos são obrigatórios. Preencha seguindo os formatos indicados.
            </p>

            <form id="form-cadastro" aria-describedby="instrucoes-cadastro">                <fieldset>
                        <legend>Informações Pessoais</legend>
        
                        <label for="nome">Nome Completo:</label>
                        <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                required
                        >
                        <label for="cpf">CPF:</label>
                        <input type="text" 
                                id="cpf" 
                                aria-describedby="ajuda-cpf"
                                name="cpf"
                                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" 
                                placeholder="000.000.000-00" 
                                title="Formato: 000.000.000-00"
                                required
                        >
                        <small id="ajuda-cpf">Formato: 000.000.000-00.</small>
        
                        <label for="email">E-mail:</label>
                        <input type="email" 
                                id="email" 
                                name="email" 
                                required
                        >
        
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" 
                                id="nascimento" 
                                name="nascimento"
                                required
                        >
                        
                        <label for="cep">CEP:</label>
                        <input type="text" 
                                id="cep"
                                aria-describedby="ajuda-cep"
                                name="cep"
                                pattern="[0-9]{5}-[0-9]{3}"
                                placeholder="00000-000" 
                                title="Formato: 00000-000"
                                required
                        >
                        <small id="ajuda-cep">Formato: 00000-000. Inclua o hífen.</small>

                        <label for="telefone">Telefone:</label>
                        <input 
                                type="tel"
                                id="telefone"
                                aria-describedby="ajuda-telefone"
                                name="telefone"
                                pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                                placeholder="(00) 00000-0000"
                                title="Formato: (00) 00000-0000"
                                required
                        >
                        <small id="ajuda-telefone">Formato: (00) 00000-0000.</small>
        
                </fieldset>
                <button class="botao-enviar" type="submit">
                     Enviar formulário 
                </button>

            </form>
            <div id="toast" role="status" aria-live="polite"></div>
    `;
}

const projetos = [
    {
        id: "educacao",
        badge: "Educação",
        titulo: "Educação para todos",
        descricao: "Promovemos oficinas, reforço escolar e acesso à educação de qualidade."
    },
    {
        id: "meio-ambiente",
        badge: "Natureza",
        titulo: "Meio Ambiente",
        descricao: "Trabalhamos para proteger e preservar o meio ambiente através de ações sustentáveis e conscientização."
    },
    {
        id: "saude",
        badge: "Solidariedade",
        titulo: "Solidariedade em Ação",
        descricao: "Realizamos campanhas de arrecadação de alimentos, roupas e outros itens essenciais para pessoas em situação de vulnerabilidade."
    }
];

