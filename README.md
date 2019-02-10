# lerna-webpack-example

[DEMO](https://dan-kez.github.io/lerna-webpack-example/)

This repository provides an example configuration for a monorepo using [lerna](https://github.com/lerna/lerna). There are a few features
baked into this relatively simple app.

1. Monorepo code splitting via [lerna](https://github.com/lerna/lerna)

1. Babel building across packages.

1. A package with a webpack config that has dependencies on packages in the monorepo.

1. Code splitting and asynchronous loading.

1. Using "external" & code splitting to only load the code necessary

1. A mix of TypeScript and Javascript packages (to show a transitional state)

## Code splitting + Routing example

This is useful pattern for upgrading older sites that rely on page redirects (e.g. django).
We use this at Klaviyo to incrementally add react pages in a well factored way.

The navigation links on the main django site use 'hard' page redirects to reload the entire page.
on load of the page, the main.js bundle is loaded. If the current route matches in router/src/index.js
we then load the associated package and only that package to render.

## Typescript implementation

This example repository uses[@babel/plugin-transform-typescript](https://babeljs.io/docs/en/babel-preset-typescript) to compile typescript files at webpack build time. Note that this does not do any type checking. Instead we rely on the typescript compiler for type checking.

This has some benefits:

1. You can write TS files and have fast hot reloading in the browser (relative to TS compilation)

1. Your IDE (e.g VSCODE) can report on typing errors. Alternatively run `yarn tsc -b` to build / type check your packages.

This also has some drawbacks / caveats:

1. More build complexity with additional tools

1. You need to have CI to ensure your types are being honored before deploy.

## Commands

* [Bootstrap](https://github.com/lerna/lerna#bootstrap) all dependencies. This will hoist shared packages to the root dir for a faster install. It will also link your dependencies together via symlinks.
    > **NOTE - use yarn install on the root repository first to install the necessary devdependencies (lerna)**

    ```BASH
    yarn bootstrap
    ```

* Start a dev server. This will run webpack in any package that has a `dev` script.
    ```BASH
    yarn dev
    ```

* Build webpack across all packages
    ```BASH
    yarn build
    ```

* Lint all JS packages
    ```BASH
    yarn lint
    ```


* Lint all TS packages
    ```BASH
    yarn lint:ts
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
│   └── router              // Web facing package
│       ├── package.json
│       ├── src
│       │   ├── index.html
│       │   └── index.jsx
│       └── webpack.config.js
└── yarn.lock
```

## Suggestions

I am fairly new to lerna and would love recommendations, or PRs, on how I might improve this simple example.
