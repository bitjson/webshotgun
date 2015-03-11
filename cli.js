#! /usr/bin/env node
var webshotgun = require('./');
var fs = require('fs');
var path = require('path');

var n = require('os').EOL;
var usage = n+
'Usage:' +n+
'   webshotgun [options] <url> [<url> ...]' +n+
'   webshotgun --file=<file>' +n+
' ' +n+
'Arguments:' +n+
'   <url>           One or more space-delimited URLs to screenshot.' +n+
'   <file>          A JSON file containing an array of URLs to screenshot.' +n+
' ' +n+
'Options:' +n+
'   -d, --dest      The directory in which to save screenshots. [default: \'./webshotgun\']' +n+
'   -f, --file      Define urls with a JSON file, format: ["URL", "URL", ... ]' +n+
'   -h, --help      Show this help.' +n+
'   -q, --quiet     Silence standard output.' +n+
'   -v, --version   Show version.' +n+
' ' +n;

var minimist = require('minimist');
var booleans = ['help', 'h', 'quiet', 'q', 'version', 'v'];
var argv = require('minimist')(process.argv.slice(2), {boolean: booleans});

function isSupportedArg(elem){
  return ['_', 'd', 'dest', 'f', 'file'].concat(booleans).indexOf(elem) != -1;
}

if(
  // has -h or --help arguement
  argv['help'] || argv['h'] ||
  // no arguements given
  argv['_'] && !argv['_'][0] && !argv.hasOwnProperty('f') && !argv.hasOwnProperty('file') ||
  // empty file arguement
  argv.hasOwnProperty('f') && !argv['f'][0] || argv.hasOwnProperty('file') && !argv['file'][0] ||
  // has unsupported arguements
  !Object.keys(argv).every(isSupportedArg)
   ){
  process.stdout.write(usage);
  process.exit();
}

if(argv['version'] || argv['v']) {
  process.stdout.write(require('./package.json').version + ' \n');
  process.exit();
}

urls = false;
if(argv.hasOwnProperty('f')){
  urls = JSON.parse(String(fs.readFileSync(path.resolve(argv['f']), 'utf8')))
}
if(argv.hasOwnProperty('file')){
  urls = JSON.parse(String(fs.readFileSync(path.resolve(argv['file']), 'utf8')))
}

webshotgun.shoot({
  dest: argv['dest'] || argv['d'],
  urls: urls || argv['_'],
  quiet: argv['q'] || argv['quiet']
});
