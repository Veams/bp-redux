# Veams Blueprint :: Redux (`@veams/bp-redux`)

With this blueprint you can scaffold a whole store slice in your application.
Let's say you have a module called `articles` and you want to add a store slice to that module,
then you can use Veams to do that automatically for you by using this blueprint.


## Setup

1. First of all be sure you have installed `@veams/cli`.
1. After that be sure your project contains a [`veams-cli.json`](https://github.com/Sebastian-Fitzner/generator-veams/blob/dev/generators/app/templates/veams-cli.json).
1. Make sure you have updated `veams-cli.json` to fit the needs of your project.
1. Install the package with `npm i @veams/bp-redux --save-dev`.
1. Reference the package in `veams-cli.json` by adding `store` to the `blueprint` object like so:

``` json
{
    "blueprints": {
        "store": {
            "skipImports": true,
            "path": "node_modules/@veams/bp-redux"
        }
    }
}
```

## Usage

Now you can use this blueprint with `veams` by executing:

``` bash
veams add store modules/articles
```

 The output will be:

``` bash
├── articles
    ├── services
    │   └── articles.service.js
    └── store
        ├── articles.actions.js
        ├── articles.epics.js
        ├── articles.reducer.js
        ├── articles.selectors.js
        └── articles.state.js

```

Every file is configured and prefixed with `articles`, because that is the namespace you used in the terminal.

Have fun!