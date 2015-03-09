#! /usr/bin/env node
var webshotgun = require('./');

var n = require('os').EOL;
var usage = n+
'Usage:' +n+
'   webshotgun [options] <url> [<url> ...]' +n+
' ' +n+
'Arguments:' +n+
'   <url>         One or many space-delimited web URLs.' +n+
' ' +n+
'Options:' +n+
'   -h, --help    Show this help.' +n+
'   -d, --dest    A directory in which to save screenshots. [default: ./webshotgun]' +n+
'   --version     Show version.' +n+
' ' +n+
'See <https://github.com/bitjson/webshotgun> for details.'+n+
' ' +n;

var minimist = require('minimist');
var argv = require('minimist')(process.argv.slice(2));

if(argv.hasOwnProperty('h') || argv.hasOwnProperty('help')) {
  process.stdout.write(usage);
  process.exit();
}

if(argv.hasOwnProperty('version')) {
  process.stdout.write(require('./package.json').version + ' \n');
  process.exit();
}

var urls = [];
if(argv.hasOwnProperty('_')){
  urls = argv['_'];
}

var dest = argv['dest'] || argv['d'] || './webshotgun';

webshotgun.shoot(urls, dest);
