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

### Babel

Babel-7 is useful for compiling from ES2015+ to ES5. 

Follow [installation of babel-config](https://github.com/kbromma/deuterium/tree/master/packages/babel-config) to add this to your configuration.


