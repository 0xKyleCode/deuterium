# @deuterium/koa

A package for quickstarting a koa server. Easy enough to start with one function, with ability to be flexible with use of `koa-router` for routes and input for added `koa-` applications.

# Install

yarn add koa koa-router @deuterium/koa

# Starting Up

```node
import { initServer } from '@deuterium/koa'

...

const server = initServer(routing, extraPackages, options)

```

### Routing

The first input to initServer is routing, which is a function with input of the `koa-router`.

An example of a routing function:

```node
const routing = router => {
    router.get('/', ctx => {
        ctx.body = 'Hello World'
    })
}
```

### Options

An object with various options:

-   silent (boolean) - If true, does not output to console.
-   port (number) - If port entered, overrides environment port.

Ex.

```node
const options = {
    silent: false,
    port: 8000,
}
```
