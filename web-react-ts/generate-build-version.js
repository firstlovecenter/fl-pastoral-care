/* eslint-disable */
const fs = require('fs')
const reactJson = require('./package.json') // file is imported from the web-react dir

const appVersion = reactJson.version

const jsonData = {
  version: appVersion,
}

var jsonContent = JSON.stringify(jsonData)

fs.writeFile('./public/meta.json', jsonContent, 'utf8', function (err) {
  if (err) {
    console.log('An error occured while writing JSON Object to meta.json')
    return console.log(err)
  }

  console.log(
    'meta.json file has been saved with latest version number',
    appVersion
  )
})

/* eslint-enable */
