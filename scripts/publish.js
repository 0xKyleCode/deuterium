/* eslint-disable */
var shell = require('shelljs')
var fs = require('fs')

// Go over all the packages
fs.readdir('./packages', function(err, files) {
    // For each, check version and publish if we need to
    files.forEach(function(file) {
        // Grab the package information
        var fs = require('fs')
        var pack = JSON.parse(
            fs.readFileSync(`.\\packages\\${file}\\package.json`, 'utf8')
        )
        var version = pack.version
        var name = pack.name

        // Check current npm repository information
        shell.exec(`npm info ${name}`, { silent: true }, function(
            code,
            output
        ) {
            var preIndex = output.indexOf(': ', output.indexOf('latest'))
            if (preIndex === -1) var currentVersion = '0.0.0'
            else {
                var postIndex = output.indexOf('\n', preIndex)
                var currentVersion = output
                    .substring(preIndex + 2, postIndex)
                    .trim()
            }
            // If version we have is on NPM, don't publish. Else, publish
            shell.echo(`${name}: ${currentVersion} --> ${version}`)
            if (version !== currentVersion) {
                shell.exec(`npm publish .\\packages\\${file}`)
            }
        })
    })
})
