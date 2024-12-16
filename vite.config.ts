import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        // https://remix.run/docs/en/2.13.1/start/future-flags#v3_fetcherpersist
        v3_fetcherPersist: true,
        // https://remix.run/docs/en/2.13.1/start/future-flags#v3_relativesplatpath
        v3_relativeSplatPath: true,
        // https://remix.run/docs/en/2.13.1/start/future-flags#v3_throwabortreason
        v3_throwAbortReason: true,
        // https://remix.run/docs/en/2.13.1/start/future-flags#v3_singlefetch
        v3_singleFetch: true,
        // https://remix.run/docs/en/2.13.1/start/future-flags#v3_lazyroutediscovery
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
