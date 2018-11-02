/* eslint-disable */

var shell = require('shelljs')
var argv = require('minimist')(process.argv.slice(2))

function exe(line) {
    shell.echo(`${line}`)
    shell.exec(line, function(code, output, err) {
        console.log(output)
        console.log(err)
    })
}

try {
    switch (argv._[0]) {
        case 'clean':
            shell.rm('-rf', './lib')
            break
        case 'lint':
            exe(`eslint .\\src -c ${shell.pwd()}\\.eslintrc.js -ext .js,.jsx`)
            break
        case 'test':
            exe(`jest --coverage`)
            break
        default:
            shell.exec(argv._[0])
    }
} catch (err) {
    console.log(err)
}
