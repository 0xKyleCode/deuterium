# @deuterium/util

A utility package that contains many useful funtions

## Installation

`yarn add @deuterium/util`

## Functions

Includes:

-   `appRoot` - Returns the absolute address of the root.
-   `checkPackage(package, required?)` - Checks to see if you have a package in your package.json
-   `checkFile(filename, required?)` - Checks to see if there is a file in your root
-   `removeDir(dirName)` - Removes a directory
-   `babelifyDir(input, output, options)` - Converts a directory into a a babeleified dir. Should have `@babel/core` installed.
-   `initWebpack(config)` - Creates a webpack that follows the config
-   `build(src, lib, babelOptions, webpackConfig)` - Reproduces removeDir, babelifyDir, initWebpack all in one function.
