# ONG Salvando Vidas

Site desenvolvido como projeto de estudo, utilizando HTML, CSS e JavaScript.

## Funcionalidades

- Navegação entre início, projetos e cadastro.
- Máscaras nos campos de CPF e telefone.
- Validação dos dígitos verificadores do CPF.
- Avisos de erro e sucesso no formulário.
- Recuperação da última rota visitada.

## Organização dos arquivos

- html/: páginas do site.
- css/: estilos.
- JS/: módulos JavaScript.
- imagens/: imagens utilizadas no projeto.

## Versão

A tag v1.0.0 identifica a primeira entrega revisada do projeto.

## Como executar o projeto

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server, caso ainda não esteja instalada.
4. Abra a pasta html.
5. Clique com o botão direito em index.html e selecione "Open with Live Server".
6. Use o menu do site para navegar entre Início, Projetos e Cadastro.

Execute o site pelo Live Server para carregar os módulos JavaScript por um servidor local.

## Como testar o cadastro

1. Abra o site pelo Live Server e acesse Cadastro.
2. Digite números nos campos CPF e telefone e confira as máscaras.
3. Tente enviar com campos obrigatórios vazios: o envio deve ser bloqueado.
4. Preencha os demais campos e use o CPF 111.111.111-11:
   deve aparecer a mensagem "Digite um CPF válido.".
5. Troque por 529.982.247-25, usado apenas como dado de teste
   dos dígitos verificadores: deve aparecer a mensagem de sucesso
   e os campos devem ser limpos.

A validação verifica o cálculo dos dígitos do CPF. Ela não consulta
sua existência ou titularidade.

O envio é uma simulação no navegador: a mensagem de sucesso
não significa que os dados foram enviados a um servidor.

## Organização das branches

- main: versão de entrega.
- develop: integração das alterações em desenvolvimento.
- feature/validacao-cpf: implementação da validação do CPF.
- release/1.0.0: preparação e revisão da primeira entrega.
- docs/readme: criação da documentação do projeto.

A tag v1.0.0 identifica a primeira entrega revisada.
