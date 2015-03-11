var path = require('path');
var slimerjs = require('slimerjs-edge');
var binPath = slimerjs.path;
var childProcess = require('child_process');

webshotgun = {
  getFirefoxPath: function(){
    if(process.platform === 'linux'){
      // Linux
      return '/usr/bin/firefox';
    }
    if(process.platform === 'darwin'){
      // Mac
      return '/Applications/Firefox.app/Contents/MacOS/firefox';
    }
    if(/^win/.test(process.platform)){
      // Windows
      return 'c:\\Program Files\\Mozilla Firefox\\firefox.exe';
    }
    else {
      throw new Error('Could not determine platform to set env[\'SLIMERJSLAUNCHER\'].');
    }
  },

  shoot: function(args){
    var dest = args.dest || './webshotgun';
    var urls = args.urls;
    if(!urls) throw new Error('Must provide URLs to shoot()');
    var quiet = args.quiet || false;

    var childArgs = [
      path.join(__dirname, 'webshotgun.js'),
      '--ssl-protocol=any', //ignore ssl issues
      '--config=' + path.join(__dirname, 'slimerConfig.json'),
      urls,
      dest + '/',
      quiet
    ];
    childProcess.execFile(binPath, childArgs, {env: {'SLIMERJSLAUNCHER' : webshotgun.getFirefoxPath()}}, function(err, stdout, stderr) {
      if(err){
        if(err.code === 255){
          console.error('SLIMERJSLAUNCHER environment variable is not set. Is Firefox installed?');
        }
        console.error('err: ', err);
      }
      if(stderr){
        console.error('stderr: ', stderr);
      }
    }).stdout.pipe(process.stdout);
  }
};


module.exports = webshotgun;
