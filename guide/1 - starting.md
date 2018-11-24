# 1 - The reckoning

Deuterium is a useful library if you want to quickstart your setup without much fuss. However, a little knowledge of JavaScript and the various libraries is helpful for understanding what is going on under the hood.

## The beginning

Start of by initiating your package, using either [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/get-npm).

```bash
yarn init -y
```
If using git, can also `git init` to start a git repository, along with creating a `.gitignore` file. Populate the `.gitignore` with

```
.DS_Store
node_modules/
coverage
lib
dist
.env
*.log
```

You can add more later if you like, but this is a pretty solid starting point.

Create a `src` directory. This will be where most work is done.

Now it is time to add dev dependencies!

## Dev installation

There are many packages that you can install which depends on what you like. I will write my prefered installations, in the correct order.

#### Babel

Babel-7 is useful for compiling from ES2015+ to ES5. 

Follow [installation of babel-preset](https://github.com/kbromma/deuterium/tree/master/packages/babel-preset) to add this to your configuration.

#### eslint

In order to 'spell-check' your code, according to specific rules, deuterium allows for the use of a preconfigured eslint file.

Follow [installation of eslint-config](https://github.com/kbromma/deuterium/tree/master/packages/eslint-config) to add this to your configuration.

#### prettier

We can use prettier to automatically format our code in a desired way. Set up with your preffered IDE for maximal effect.

Follow [installation of prettier-config](https://github.com/kbromma/deuterium/tree/master/packages/prettier-config) to add this to your configuration.

#### jest

In order to test our code, jest is the preffered method used in deuterium

Follow [installation of jest-config](https://github.com/kbromma/deuterium/tree/master/packages/jest-config) to add this to your configuration.

#### flow

In order to get a typescript-like environment, we can use [Flow](https://flow.org/) to achieve this. 

To set up flow, we need to install a few things:

```bash
yarn add --dev flow-bin babel-preset-flow
```

and add a file in your root directory called `.flowconfig`, with contents:

```
[options]
suppress_comment= \\(.\\|\n\\)*\\flow-disable-next-line
```

And voila! Flow is set up.

# `package.json` scripts

In your package.json, you can take advantage of these many development by adding the following to your `package.json`:

```json
"scripts": {
        "start": "babel-node src",
        "lint": "eslint src && flow",
        "test": "jest"
    },
```

As long as you have an `index.js` file in the `src` directory, everything should work!
