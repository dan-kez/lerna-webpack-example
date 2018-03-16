# lerna-webpack-example

This repo provides an example configuration for a monorepo using lerna. There are a few features
baked into this relatively simple app.

1. Monorepo code splitting via [lerna](https://github.com/lerna/lerna)

1. Babel building across packages.

1. A package with a webpack config that has dependencies on packages in the monorepo.

1. Code splitting and asynchronous loading.

## Commands

* Start a dev server. This will run babel in all packages and developer mode webpack in any package that has a `dev` script.
    ```BASH
    yarn dev
    ```

* Build all babel & webpack builds across all packages
    ```BASH
    yarn build
    ```

* Lint all of the packages
    ```BASH
    yarn lint
    ```

## Directory structure

```txt
.
├── README.md
├── lerna.json
├── package.json
├── packages
│   ├── async-leaf          // Asynchronously loaded package (via webpack chunks)
│   │   ├── package.json
│   │   └── src
│   │       └── index.jsx
│   ├── leaf                // Synchronously loaded package
│   │   ├── package.json
│   │   └── src
│   │       └── index.jsx
│   └── orchestra           // Web facing package
│       ├── package.json
│       ├── src
│       │   ├── index.html
│       │   └── index.jsx
│       └── webpack.config.js
└── yarn.lock
```

## Suggestions

I am fairly new to lerna and would love recommendations, or PRs, on how I might improve this simple example.
