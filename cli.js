#! /usr/bin/env node
var webshotgun = require('./');
var n = require('os').EOL;
var usage = n+
'Usage:' +n+
'   webshotgun [options] <url> [<url> ...]' +n+
' ' +n+
'Arguments:' +n+
'   <url>           One or more space-delimited URLs to screenshot.' +n+
' ' +n+
'Options:' +n+
'   -d, --dest      A directory in which to save screenshots. [default: \'./webshotgun\']' +n+
'   -h, --help      Show this help.' +n+
'   -q, --quiet     Silence standard output.' +n+
'   -v, --version   Show version.' +n+
' ' +n;

var minimist = require('minimist');
var booleans = ['help', 'h', 'quiet', 'q', 'version', 'v'];
var argv = require('minimist')(process.argv.slice(2), {boolean: booleans});

function isSupportedArg(elem){
  return ['_', 'd', 'dest'].concat(booleans).indexOf(elem) != -1;
}

if(argv['help'] || argv['h'] ||
   !argv.hasOwnProperty('_') ||
   !Object.keys(argv).every(isSupportedArg)) {
  process.stdout.write(usage);
  process.exit();
}

if(argv['version'] || argv['v']) {
  process.stdout.write(require('./package.json').version + ' \n');
  process.exit();
}

webshotgun.shoot({
  dest: argv['dest'] || argv['d'],
  urls: argv['_'],
  quiet: argv['q'] || argv['quiet']
});
