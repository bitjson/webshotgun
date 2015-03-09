#! /usr/bin/env node
var webshotgun = require('./');
var n = require('os').EOL;
var usage = n+
'Usage:' +n+
'   webshotgun [options] <url> [<url> ...]' +n+
' ' +n+
'Arguments:' +n+
'   <url>           One or many space-delimited web URLs.' +n+
' ' +n+
'Options:' +n+
'   -h, --help      Show this help.' +n+
'   -d, --dest      A directory in which to save screenshots. [default: ./webshotgun]' +n+
'   -q, --quiet     Silence standard output.' +n+
'   --version       Show version.' +n+
' ' +n+
'See https://github.com/bitjson/webshotgun for details.'+n+
' ' +n;

var minimist = require('minimist');
var booleans = ['h', 'help', 'q', 'quiet', 'version'];
var argv = require('minimist')(process.argv.slice(2), {boolean: booleans});

function isSupportedArg(elem){
  return ['_', 'd', 'dest'].concat(booleans).indexOf(elem) != -1;
}

if(argv['h'] ||
   argv['help'] ||
   !argv.hasOwnProperty('_') ||
   !Object.keys(argv).every(isSupportedArg)) {
  process.stdout.write(usage);
  process.exit();
}

if(argv['version']) {
  process.stdout.write(require('./package.json').version + ' \n');
  process.exit();
}

webshotgun.shoot({
  dest: argv['dest'] || argv['d'],
  urls: argv['_'],
  quiet: argv['q'] || argv['quiet']
});
