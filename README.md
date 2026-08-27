# mepo

Personal app built with [TanStack Start](https://tanstack.com/start), deployed on [Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/).

- **UI:** [shadcn/ui](https://ui.shadcn.com) (Tailwind is required by shadcn)
- **App CSS:** [StyleX](https://stylexjs.com) for layout, tokens, and page chrome
- **Nav:** left sidebar with placeholder destinations

## Develop

```sh
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Build / preview / deploy

```sh
npm run build
npm run preview
npm run deploy
```

`deploy` needs a logged-in Wrangler session (`npx wrangler login`) or Cloudflare CI credentials.

## Add shadcn components

```sh
npx shadcn@latest add button
```
