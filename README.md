# Vereinsflieger OpenAPI

This repository contains an unofficial OpenAPI 3.1 description of the Vereinsflieger REST API. It covers the 44 operations in the [official REST API specification](https://vereinsflieger.de/member/help/download?file=VereinsfliegerRestInterface.pdf) dated 11 September 2026. The official document requires a Vereinsflieger website login.

The contract is maintained in [openapi.yaml](openapi.yaml). Its version is independent of the API: `0.YYYYMMDD.patch` uses the official document date as the minor version, while the patch version changes for description updates based on the same document. The source date is also recorded in `x-source-document-date`.

Each response has an `x-verification` marker. `basis: documentation` identifies a response described by the official document or a working client. `basis: inference` identifies a provisional response shape. `observedAt` appears only where that exact HTTP response was checked against the live API. Other responses for the same operation remain unverified unless marked separately.

## Validate locally

With pnpm 12 and Node.js 24 or later:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm generate:types
```

Type generation checks that `openapi-typescript` can process the description. The generated types remain local; downstream projects can generate clients or types with their chosen tooling.
