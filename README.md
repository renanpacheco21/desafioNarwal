# desafioNarwal
Implementação de testes automatizado em cypress para aplicação end2end e api


# Projeto de Automação com Cypress (Desafio Narwal)

## 📋 Visão Geral do Projeto
Este projeto é uma suíte de testes automatizados desenvolvida com [Cypress](https://www.cypress.io/). Ele foi criado para garantir a qualidade e confiabilidade de aplicações web e api. 


## ⚙️ Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- Node.js (>= 14.x)
- npm ou yarn
- Cypress

---

## 🚀 Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/renanpacheco21/desafioNarwal
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   Ou, se estiver usando yarn:
   ```bash
   yarn install
   ```

3. Instale o Cypress:
   ```bash
   npm install cypress --save-dev
   ```
   Ou, se estiver usando yarn:
   ```bash
   yarn add cypress --dev
   ```

4. Inicialize o Cypress no projeto:
   ```bash
   npx cypress open
   ```

---

## 📁 Estrutura do Projeto
```
.
.
├── cypress
│   ├── e2e                 # Testes end-to-end
|       ├── interface       # Casos de testes da interface gráfica
│       └── api             # Casos de testes de integração das APIs
│   ├── fixtures            # Dados estáticos, como arquivos JSON usados nos testes
│   ├── plugins             # Arquivos de configuração de plugins
|   ├── reports             # Relatórios gerados (HTML, JSON, etc.)
│   └── support             # Custom commands e configurações globais
│       ├── commands.js     # Definições de comandos personalizados do Cypress
│       └── e2e.js          # Configuração global para testes e2e
├── cypress.config.js       # Configuração principal do Cypress
├── package.json            # Gerenciador de dependências e scripts do projeto
├── package-lock.json       # Controle de versões das dependências instaladas
├── node_modules            # Dependências instaladas (ignorar no controle de versão)
├── README.md               # Documentação do projeto
├── .gitignore              # Arquivo para ignorar pastas/arquivos no Git


```

---

## 🏃 Executando os Testes

### Modo Interativo
Para executar os testes interativamente com o Test Runner do Cypress:
```bash
npx cypress open
```

### Modo Headless
Para executar os testes no modo headless:
```bash
npx cypress run
```

---

## 📊 Gerando Relatórios HTML
Este projeto utiliza o **Mochawesome** para geração de relatórios em HTML.

1. Execute os testes no modo headless:
   ```bash
   npx cypress run
   ```

2. Gere o relatório em HTML:
   ```bash
   npm run test:report
   ```

O relatório estará disponível na pasta `cypress/reports`.

---


## 📄 Licença e Autor
Este projeto está licenciado sob a [Licença MIT](LICENSE).
Esse projeto é de minha autoria Renan Pacheco de Matos

---

## 📚 Referências
- [Documentação do Cypress](https://docs.cypress.io/)
- [Narwal Sistemas](https://www.narwalsistemas.com.br/)
- [Documentação GitHub Rest](https://docs.github.com/en/rest)