# React Task Manager: Uma Aplicação Moderna e Escalável

## Visão Geral do Projeto

Este projeto apresenta um **Gerenciador de Tarefas** desenvolvido com tecnologias de ponta do ecossistema React, focado em **performance, escalabilidade e manutenibilidade**. A aplicação oferece uma interface intuitiva para gerenciar tarefas, permitindo a criação, visualização, edição, exclusão e marcação de status de forma eficiente. É uma demonstração prática de como construir aplicações front-end robustas e bem arquitetadas.

## Destaques Técnicos e Arquiteturais

Este projeto foi cuidadosamente arquitetado para demonstrar proficiência em práticas de desenvolvimento modernas e decisões técnicas estratégicas. Abaixo, detalho as principais escolhas que garantem a qualidade e a escalabilidade da aplicação:

### 1. **Tecnologias de Ponta**

- **React 19**: Utilização da versão mais recente do React, aproveitando suas otimizações e novos recursos para uma interface de usuário reativa e performática.
- **TypeScript**: Adoção rigorosa de tipagem estática para garantir a robustez do código, facilitar a detecção de erros em tempo de desenvolvimento e melhorar a colaboração em equipe.
- **Vite**: Escolha do Vite como ferramenta de build, proporcionando um ambiente de desenvolvimento extremamente rápido (HMR) e builds otimizados para produção.

### 2. **Gerenciamento de Estado com Zustand**

- O estado global da aplicação é gerenciado com **Zustand**, uma solução leve e flexível. A escolha por Zustand reflete a preferência por uma abordagem minimalista e performática, evitando _boilerplate_ desnecessário e promovendo a imutabilidade do estado, o que é crucial para a previsibilidade e depuração em aplicações complexas.

### 3. **Arquitetura Modular (Feature-Sliced Design)**

- A estrutura do projeto segue um padrão modular, organizado por `features` (funcionalidades), `components` (componentes reutilizáveis), `hooks` (lógica de reuso) e `store` (gerenciamento de estado). Essa abordagem, inspirada no **Feature-Sliced Design**, promove:
  - **Separação de Preocupações**: Cada funcionalidade é autocontida, facilitando o desenvolvimento e a manutenção.
  - **Escalabilidade**: Adicionar novas funcionalidades ou modificar existentes se torna mais simples e menos propenso a efeitos colaterais.
  - **Reusabilidade**: Componentes e hooks são projetados para serem reutilizáveis em diferentes partes da aplicação.

### 4. **Testes Abrangentes com Vitest**

- A qualidade do código é assegurada através de testes unitários escritos com **Vitest**. A integração com o Vite proporciona um ambiente de teste rápido e eficiente. A preocupação com a cobertura de código garante a confiabilidade das funcionalidades e a facilidade de refatoração.

### 5. **Estilização e Responsividade com TailwindCSS**

- A estilização é implementada utilizando **TailwindCSS**, um framework CSS _utility-first_. Isso permite um desenvolvimento de UI ágil, consistente e altamente personalizável, garantindo que a aplicação seja responsiva e visualmente agradável em diversos dispositivos.

### 6. **Qualidade de Código e Padronização**

- **ESLint** e **Prettier** são utilizados para manter um código limpo, consistente e livre de erros. Essas ferramentas garantem a aderência a padrões de codificação, facilitam a revisão de código e promovem um ambiente de desenvolvimento colaborativo.

## Funcionalidades Principais

- **Gestão de Tarefas (CRUD)**: Fluxo completo de criação, leitura, atualização e exclusão.
- **Persistência de Estado**: Sincronização eficiente entre a UI e a _store_ global.
- **Feedback Visual**: Interface reativa que reflete mudanças de estado instantaneamente.
- **Filtros e Status**: Organização lógica para acompanhamento do progresso das tarefas.

## Diferenciais

Se você está avaliando este projeto, aqui estão alguns pontos que demonstram meu compromisso com a excelência técnica:

| Diferencial               | Descrição                                                                          |
| :------------------------ | :--------------------------------------------------------------------------------- |
| **Arquitetura Escalável** | Uso de _Feature-Sliced Design_ para evitar o crescimento desordenado do código.    |
| **Tipagem Estrita**       | TypeScript configurado para prevenir erros comuns e servir como documentação viva. |
| **Performance**           | Uso de _stores_ atômicas no Zustand e renderização otimizada com React 19.         |
| **Testabilidade**         | Código desacoplado que permite testes unitários eficazes e alta cobertura.         |
| **Clean Code**            | Aplicação de princípios SOLID e nomes semânticos para facilitar a leitura.         |

## Como Rodar o Projeto Localmente

Para explorar o projeto em seu ambiente local, siga as instruções abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/allysrdev/react-taskManager.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd react-taskManager
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou yarn install
    ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev
```

O aplicativo estará acessível em `http://localhost:5173` (ou uma porta alternativa, se a 5173 estiver em uso).

## Testes

Para executar os testes unitários e verificar a cobertura de código:

```bash
npm run test
# ou yarn test
```

Para gerar um relatório de cobertura de código:

```bash
npm run coverage
# ou yarn coverage
```

## Contribuição

Contribuições são valorizadas! Sinta-se à vontade para abrir _issues_ para sugestões ou _pull requests_ para melhorias.

## Autor

**Allyson Santana**

[GitHub](https://github.com/allysrdev)
[LinkedIn](https://www.linkedin.com/in/allysonsantana/) (Exemplo, por favor, substitua pelo seu link real do LinkedIn)
