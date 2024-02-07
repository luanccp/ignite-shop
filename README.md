# 🚀 Getting Started

First, install all project dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

## 🏷️ Topics

### Next Image latest component

### Server side render (SSR) concepts

### Static site generator (SSG) concepts

It makes a cache when the app is build. It's different from SSR that runs every time the user refreshes the page.
The performance gets better:

- SSR +- 300ms
- SSG +- 5ms

`revalidade` prop vai dar refresh no cache

how to make that? just use `getStaticProps` and next will understand that is a SSG and not a SSR.

It's not a silver bullet because your app sometime will need live interactions so be caution.

if you need to refresh your component every now and then but think SSG is worth it, just use `revalidate` prop inside the `getStaticProps`.

#### 📚 Extra commands

When need to build the project and test SSG

```bash
npm build
```

Run the project as would it be live

```bash
npm start
```
