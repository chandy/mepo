# mepo

Personal app. Web first, then an iPhone client.

| Client | Stack | Status |
| --- | --- | --- |
| Web | [TanStack Start](https://tanstack.com/start) on [Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/) | In progress |
| iPhone | [Expo](https://expo.dev) (iOS) | Next, after a minimal web app |

Web UI uses [shadcn/ui](https://ui.shadcn.com) (Tailwind is required by shadcn) and [StyleX](https://stylexjs.com) for layout. Those stay on web. Expo will be a separate React Native app that talks to this Worker over HTTP, not a wrap of the website.

When we add Expo, keep shared logic behind `/api/*` routes (see `GET /api/health`) so both clients can use the same backend. Don't put mobile-needed behavior only in TanStack Start server functions or browser-only code.

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

`GET /api/health` is a CORS-enabled JSON endpoint the iPhone app can call later.

## Add shadcn components

```sh
npx shadcn@latest add button
```
