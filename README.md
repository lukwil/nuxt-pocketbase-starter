# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

First, make sure to install [NodeJS with its LTS version](https://nodejs.org/en/download).
And then install the project dependencies dependencies:

```bash
npm install
```

Second, you have to change the configuration (in `nuxt.config.ts`) accordingly to your Pocketbase instance:

```typescript
...
pocketbase: {
    url: 'https://pocketbase.io', // Your PocketBase URL
},
...
```

Then you can start the development server on `http://localhost:3000` (which will automatically restart when you change something in the code):

```bash
npm run dev
```

## Components

### Vue

The 'language' for the frontend in combination with TypeScript.
You can find a tutorial [here](https://vuejs.org/tutorial/). When possible, try to use the composition API.

### Vuetify

Vuetify gives you Material Design components implemented in Vue.
You can find the documentation with examples for the different components [here](https://vuetifyjs.com/).

### Nuxt

Nuxt will give you a more opinionated 'structure' to your Vue project. It also enables you to use different functionality without the need for an explicit import.
You can find its documentation [here](https://nuxt.com/docs).

### Pocketbase

Pocketbase will give you an automatic REST API over a SQLite database.
It's easy to use and has all of its features documented [here](https://pocketbase.io/docs/).

For your convenience, you can use a free hosted version for testing on [https://pockethost.io/](https://pockethost.io/).
