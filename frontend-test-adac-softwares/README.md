# Teste Técnico Frontend - ADAC Softwares

## 👋 Contextualização

Este repositório contém a implementação de uma **landing page responsiva** desenvolvida como parte do **Teste Técnico Frontend da ADAC Softwares**.

O principal objetivo do projeto foi transformar fielmente um design fornecido no Figma em uma aplicação funcional, utilizando boas práticas de desenvolvimento frontend, código organizado e atenção a detalhes visuais, responsividade e documentação.

---

## 🎯 Objetivo do Desafio

Avaliar habilidades em desenvolvimento frontend, especialmente:

* Conversão de design em código
* Organização e qualidade do código
* Responsividade (mobile, tablet e desktop)
* Fidelidade visual ao Figma
* Clareza na documentação do projeto

---

## 🎨 Design

O design base utilizado neste projeto está disponível no Figma:

👉 **Startup Landing Page Dark (Community)**
[https://www.figma.com/design/ZPNUmaiz9mBy3vdKDQUass/Figma-startup-landing-page-dark--Community-](https://www.figma.com/design/ZPNUmaiz9mBy3vdKDQUass/Figma-startup-landing-page-dark--Community-)

---

## ⚙️ Tecnologias Utilizadas

* **React** (via Next.js)
* **Next.js 14 (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React** (ícones)
* **Vercel** (deploy)

---

## 🏗️ Estrutura do Projeto

O projeto foi desenvolvido utilizando o **App Router do Next.js**, com organização baseada em componentes reutilizáveis:

* `app/` — rotas e layout raiz
* `components/` — componentes de layout e seções (Header, Hero, Features, Gallery, etc.)
* `public/` — imagens, ícones e assets estáticos
* `constants/` — dados estáticos como navegação

---

## 🚧 Processo de Desenvolvimento

O desenvolvimento foi dividido em fases para garantir organização, evolução gradual do layout e facilidade de revisão:

**Fase 1** — Estrutura inicial, dependências e pré-deploy

**Fase 2** — Header e Footer

**Fase 3** — Hero principal e Features

**Fase 4** — Contents e Gallery

**Fase 5** — Correção de bugs e ajustes de texto

**Fase 6** — Partners, Testimonials e CTA

**Fase 7** — Estilização de imagens e backgrounds

**Fase 8** — Ícones e detalhes visuais

**Fase 9** — Revisão final de botões, paddings, fontes e cores

**Fase 10** — Documentação final

---

## 📱 Responsividade

O layout foi desenvolvido seguindo o conceito **mobile-first**, garantindo:

* Boa visualização em dispositivos móveis
* Ajustes progressivos para tablet e desktop
* Grids e espaçamentos adaptáveis

---

## ⚠️ Observações Técnicas

Durante a instalação das dependências, o comando `npm audit` aponta vulnerabilidades relacionadas a dependências internas do **Next.js** e do **ESLint**.

Essas vulnerabilidades:

* Não afetam o funcionamento da aplicação
* Não são exploráveis no escopo deste projeto (landing page estática)
* Foram mantidas para preservar estabilidade e compatibilidade da stack

---

## 🎨 Ícones, Imagens e Fontes

* Alguns ícones do Figma não estavam disponíveis exatamente nas bibliotecas utilizadas. Nestes casos, foram utilizados **SVGs personalizados** ou alternativas visuais próximas.
* Nem todas as imagens originais estavam disponíveis; imagens similares foram utilizadas mantendo a proposta visual.
* A fonte utilizada é uma alternativa próxima à do design original, respeitando hierarquia tipográfica e legibilidade.

Essas decisões foram tomadas visando equilíbrio entre fidelidade visual e viabilidade técnica.

---

## 🚀 Deploy

A aplicação está disponível online em:

👉 **Vercel Deploy**
*([link do deploy aqui](https://test-adac-softwares.vercel.app/))*

---

## ▶️ Como Executar o Projeto Localmente

Para rodar o projeto em ambiente local, siga os passos abaixo:

### Pré-requisitos

* **Node.js** versão 18 ou superior
* **npm** (instalado junto com o Node)

### Instalação

Clone o repositório:

```bash
git clone https://github.com/DaihSeven/frontend-test-adac-softwares.git
```

Acesse a pasta do projeto:

```bash
cd frontend-test-adac-softwares
```

Instale as dependências:

```bash
npm install
```

### Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

### Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para rodar o build localmente:

```bash
npm run start
```

---

## 👩‍💻 Sobre mim

**Daiane das Graças Barbosa Koslowski**

* 🌐 Portfólio: [https://dev-portfolio-murex-phi.vercel.app/](https://dev-portfolio-murex-phi.vercel.app/)
* 💼 LinkedIn: [https://www.linkedin.com/in/daianebarbosak/](https://www.linkedin.com/in/daianebarbosak/)
* 💻 GitHub: [https://github.com/DaihSeven](https://github.com/DaihSeven)

---

## 📬 Considerações Finais

Este projeto foi desenvolvido com foco em clareza, organização e aprendizado contínuo. Fico à disposição para esclarecer qualquer ponto técnico ou decisão tomada durante o desenvolvimento.

Obrigado pela oportunidade 🚀
