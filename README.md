# Gerenciador de Tarefas com React e TypeScript

## Descrição do Projeto

Este é um gerenciador de tarefas simples e eficiente, desenvolvido utilizando React, TypeScript e Vite. O projeto foca em oferecer uma interface de usuário intuitiva para a criação, visualização, edição e exclusão de tarefas, com uma arquitetura modular e testável.

## Funcionalidades

- Criação de novas tarefas.
- Visualização de todas as tarefas existentes.
- Edição de tarefas (título, descrição, status).
- Exclusão de tarefas.
- Marcação de tarefas como concluídas/pendentes.

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida para projetos web modernos.
- **TailwindCSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Zustand**: Uma solução de gerenciamento de estado leve e escalável para React.
- **Phosphor Icons**: Biblioteca de ícones flexível.
- **Vitest**: Framework de testes unitários rápido, otimizado para Vite.
- **ESLint**: Ferramenta para identificar e reportar padrões problemáticos encontrados no código JavaScript/TypeScript.
- **Prettier**: Formatador de código opinativo.

## Estrutura do Projeto

A estrutura de pastas do projeto segue uma abordagem modular, facilitando a manutenção e escalabilidade:

```
src/
├── @types/             # Definições de tipos globais
├── assets/             # Ativos estáticos (imagens, ícones, etc.)
├── components/         # Componentes React reutilizáveis
├── features/
│   └── tasks/          # Módulo específico para funcionalidades de tarefas
│       ├── components/ # Componentes relacionados a tarefas
│       ├── hooks/      # Hooks personalizados para lógica de tarefas
│       └── store/      # Gerenciamento de estado de tarefas com Zustand
├── pages/              # Páginas principais da aplicação
│   └── Home/           # Página inicial
├── styles/             # Estilos globais e configurações do TailwindCSS
├── App.tsx             # Componente principal da aplicação
├── main.tsx            # Ponto de entrada da aplicação
└── setupTests.ts       # Configuração de testes
```

## Como Rodar o Projeto

Para configurar e executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados em sua máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/allysrdev/react-taskManager.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd react-taskManager
   ```
3. Instale as dependências:
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

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, se 5173 estiver em uso).

## Testes

Para executar os testes unitários do projeto:

```bash
npm run test
# ou yarn test
```

Para executar os testes com cobertura de código:

```bash
npm run coverage
# ou yarn coverage
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor

Allyson Santana

[GitHub](https://github.com/allysrdev)
