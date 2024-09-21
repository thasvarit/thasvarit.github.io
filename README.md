## Developing

Install dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

>[!NOTE]
> You don't need to run this since you are using GitHub Pages via GitHub Actions

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Note on directory structure
- Edit resource list at [`src/lib/list.json`](src/lib/list.json)
- Main page is at [`src/routes/+page.svelte`](src/routes/+page.svelte)