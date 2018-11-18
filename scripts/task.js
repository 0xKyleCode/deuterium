/* eslint-disable */

var shell = require('shelljs')
var argv = require('minimist')(process.argv.slice(2))
var babel = require('@babel/core')

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
            shell.rm('-rf', '.\\lib')
            shell.rm('-rf', '.\\*.flow')
            shell.rm('-rf', '.\\__tests__')
            break
        case 'build':
            // Build ES5 using babel
            shell.exec(`..\\..\\node_modules\\.bin\\babel -d .\\lib .\\src`)

            // Now lets build flow type configurations
            shell.exec(`..\\..\\node_modules\\.bin\\flow-copy-source .\\src .\\`)

            // Now add all builds to deuterium
            var name = shell.pwd().substr(shell.pwd().indexOf('packages\\')+'packages\\'.length)
            shell.mkdir('-p', `${shell.pwd()}\\..\\deuterium\\${name}`)
            shell.cp('-r', '.\\', `${shell.pwd()}\\..\\deuterium\\${name}`)
        default:
            shell.exec(argv._[0])
    }
} catch (err) {
    console.log(err)
}
