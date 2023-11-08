<h1 align="center">Inspire</h1>

> Status: Em desenvolvimento...

<!-- <p align="center">
  <img src="sua-imagem-preview.png" alt="Inspire Preview" style="border-radius: 4px">
</p> -->

<p align="center">Liberte sua criatividade com o Inspire, uma plataforma SaaS de inteligência artificial que oferece uma variedade de serviços criativos.</p>

## Breve Descrição

Liberte sua criatividade com o Inspire, a plataforma SaaS de inteligência artificial que transforma suas ideias em realidade.

Com uma interface intuitiva e modelos de IA de última geração, Inspire é a ferramenta perfeita para criar conteúdo criativo, resolver problemas e aprender sobre novos tópicos. Oferecendo serviços como:

* **Conversação:** Converse com um chatbot treinado em um grande conjunto de dados de texto e código.
* **Geração de Música:** Crie músicas originais usando um modelo de aprendizado de máquina.
* **Geração de Imagens:** Crie imagens realistas usando um modelo de geração de imagens.
* **Geração de Vídeos:** Crie vídeos personalizados usando um modelo de geração de vídeos.
* **Geração de Código:** Gere código em uma variedade de linguagens usando um modelo de geração de código.

## Visão Geral

Inspire é uma plataforma poderosa que pode ser usada para uma variedade de propósitos, incluindo:

* **Criar conteúdo criativo:** Use Inspire para criar músicas, imagens, vídeos e código originais.
* **Resolver problemas:** Use Inspire para obter ajuda com tarefas ou projetos.
* **Aprender:** Use Inspire para aprender sobre novos tópicos.

## Funcionalidades

Inspire oferece uma variedade de funcionalidades que tornam a plataforma fácil de usar e divertida:

* **Interface intuitiva:** A interface de Inspire é fácil de entender e navegar.
* **Modelos de IA de última geração:** Inspire utiliza os modelos de IA mais recentes para fornecer os melhores resultados possíveis.

## Tecnologias

Inspire é construído com as seguintes tecnologias:

- Next.js
- OpenAI
- Clerk Authentication
- TypeScript
- Tailwind CSS
- Shadcn/UI
- e muito mais

### Instalação
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/gafanhotoalexandre/my-genius.git
cd my-genius
npm install
```

Crie um arquivo ``` .env.local ```, copie as variáveis abaixo e preencha-as de acordo com os dados de seu ambiente.

OBS: Não modifique as variáveis de sign-in, sign-up, after sign-in e after sign-up.
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
```

Por fim, execute:
```bash
npm run dev
```