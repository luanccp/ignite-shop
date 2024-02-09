# 🚀 Getting Started

First, install all project dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

_Remember to set your stripe env variables_

## 🏷️ Topics

This project was an attempt to explore some of the Next features and some web development concepts.

### Server side render (SSR) concepts

```mermaid
graph TD;
    Backend API-->Server side (Next);
    Server side (Next)-->Frontend (client);
    Frontend (client)-->Server side (Next);
```

### Static site generator (SSG) concepts

It makes a cache when the app is build. It's different from SSR that runs every time the user refreshes the page.
The performance gets better:

- SSR +- 300ms
- SSG +- 5ms

`revalidate` prop vai dar refresh no cache

how to make that? just use `getStaticProps` and next will understand that is a SSG and not a SSR.

It's not a silver bullet because your app sometime will need live interactions so be caution.

if you need to refresh your component every now and then but think SSG is worth it, just use `revalidate` prop inside the `getStaticProps`.

### Stitches

It's a style library similar to `Styled-components`. It allows you write CSS-in-JS.

### Link prefetch

The `Link` from Nextjs has a prefetch mechanism. So when the user mouseover the link it will prefetch the next page. There are some cases that it could have some downsides. So we have a prefetch prop that could be handy.

### Stripe integration

In this project we could explore the connection together with some env variables from Nextjs.
I did create products on the Stripe platform and fetch tem from the project site.
I also used the `session` approach in order to have the checkout flow.
I did explore the `expand` stripe approach to expand stripe object relations.

#### 📚 Extra commands

When need to build the project and test SSG

```bash
npm build
```

Run the project as would it be live

```bash
npm start
```
