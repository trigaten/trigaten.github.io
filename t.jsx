const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('./projects.yaml', 'utf8');
    let data = yaml.safeLoadAll(fileContents);

    console.log(data);
} catch (e) {
    console.log(e);
}