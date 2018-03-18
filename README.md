# lerna-webpack-example

[DEMO](https://dmk255.github.io/lerna-webpack-example/)

This repository provides an example configuration for a monorepo using [lerna](https://github.com/lerna/lerna). There are a few features
baked into this relatively simple app.

1. Monorepo code splitting via [lerna](https://github.com/lerna/lerna)

1. Babel building across packages.

1. A package with a webpack config that has dependencies on packages in the monorepo.

1. Code splitting and asynchronous loading.

1. Using "external" & code splitting to only load the code necessary

## Code splitting + Routing example

This is useful pattern for upgrading older sites that rely on page redirects (e.g. django).
We use this at Klaviyo to incrementally add react pages in a well factored way.

The navigation links on the main django site use 'hard' page redirects to reload the entire page.
on load of the page, the main.js bundle is loaded. If the current route matches in orchestra/src/index.js
we then load the associated package and only that package to render.

## Commands

* [Bootstrap](https://github.com/lerna/lerna#bootstrap) all dependencies. This will hoist shared packages to the root dir for a faster install. It will also link your dependencies together via symlinks.
    > **NOTE - use yarn install on the root repository first to install the necessary devdependencies (lerna)**

    ```BASH
    yarn bootstrap
    ```

* Start a dev server. This will run babel in all packages and developer mode webpack in any package that has a `dev` script.
    ```BASH
    yarn dev
    ```

* Build babel & webpack across all packages
    ```BASH
    yarn build
    ```

* Lint all packages
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
