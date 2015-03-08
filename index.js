var path = require('path');
var slimerjs = require('slimerjs');
var binPath = slimerjs.path;
var childProcess = require('child_process');
var childArgs = [
  path.join(__dirname, 'webshotgun.js'),
  '--ssl-protocol=any' //ignore ssl issues
];

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

  shoot: function(urlArray, outputDir){
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
