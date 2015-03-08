#! /usr/bin/env node
var webshotgun = require('./');

var n = require('os').EOL;
var usage = n+
'Usage: webshot [options] [<url> <url> <url>] [<dest>]' +n+
' ' +n+
'Arguments:' +n+
'  <url>   A web URL.' +n+
'  <dest>  A directory to save the screenshots.' +n+
' ' +n+
'Options:' +n+
'  -h, --help                  Show this help.' +n+
'  -v, --version               Show version.' +n+
' ' +n+
'See <https://github.com/bitjson/webshotgun> for details.'+n+
' ' +n;

var minimist = require('minimist');
var argv = require('minimist')(process.argv.slice(2));

if(argv.hasOwnProperty('h') || argv.hasOwnProperty('help')) {
  process.stdout.write(usage);
  process.exit();
}

if(argv.hasOwnProperty('v') || argv.hasOwnProperty('version')) {
  process.stdout.write('todo');
  process.exit();
}

var urls = [];
if(argv.hasOwnProperty('_')){
  urls = argv['_'];
}

var outputDir = argv['outputDir'] || argv['o'] || 'output';

console.dir(argv);
console.log('TODO: actually use these arguements...')
webshotgun.shoot(urls, outputDir);
