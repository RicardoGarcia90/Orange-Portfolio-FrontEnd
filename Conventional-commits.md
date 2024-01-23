# Padrões de commits

## A estrutura dos Commits Semânticos

especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas. Esta convenção segue o SemVer, descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

A mensagem do commit deve ser estruturada da seguinte forma:

<tipo>(<escopo>): <mensagem>

Componentes da Estrutura:
Tipo: Define a natureza da alteração, e.g., `feat`, `fix`, `docs`.
Escopo: É opcional e contextualiza onde a mudança ocorre, e.g., `auth`, `backend`.
Mensagem: Descreve a mudança de maneira concisa.
Por exemplo, o commit feat(auth): add 2FA functionality indica a introdução de uma nova funcionalidade relacionada à autenticação - a funcionalidade de autenticação de dois fatores.

## Tipos

A primeira e principal descrição de um commit semântico, refere-se a seu tipo, os quais possuem a finalidade de comunicar a intenção de processamento que o utilizador teve em sua execução.

Abaixo será enumerado os principais types descritos na documentação do Angular Commit Message Guidelines:

- build: Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências externas** (escopos de exemplo: gulp, broccoli, npm);
- docs: Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código);
- feat: Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso**;
- fix: Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix);
- refactor: Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**;
- style: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente, etc;
- test: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD);
- env: basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.

## Exemplos:

<table>
  <thead>
    <tr>
      <th>Comando Git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
      <td>
        <code>git commit -m "docs: Atualização do README"</code>
      </td>
      <td>docs: Atualização do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m "fix: Loop infinito na linha 50"</code>
      </td>
      <td>fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m "feat: Página de login"</code>
      </td>
      <td>feat: Página de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m "refactor: Passando para arrow functions"</code>
      </td>
      <td>refactor: Passando para arrow functions</td>
    </tr>
      <td>
        <code>git commit -m "fix: Revertendo mudanças ineficientes"</code>
      </td>
      <td>fix: Revertendo mudanças ineficientes</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m "style: Estilização CSS do formulário"</code>
      </td>
      <td>style: Estilização CSS do formulário</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m "test: Criando novo teste"</code>
      </td>
      <td>test: Criando novo teste</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m "docs: Comentários sobre a função LoremIpsum( )"</code>
      </td>
      <td>docs: Comentários sobre a função LoremIpsum( )</td>
    </tr>
  </tbody>
</table>
