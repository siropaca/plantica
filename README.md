# Plantica

## Bootstrap

```shell
make bs
```

## Development

Run the dev server:

```shell
bun run dev
```

## Deployment

First, build your app for production:

```shell
bun run build
```

Then run the app in production mode:

```shell
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun run build`

- `build/server`
- `build/client`
