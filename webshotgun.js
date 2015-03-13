var urls = phantom.args[0].split(',');
var dest = phantom.args[1];
var quiet = (phantom.args[2] == 'true');
var tree = (phantom.args[3] == 'true');

var webpage = require('webpage');
var async = require('./node_modules/async/lib/async.js');

say(' Destination directory set to: ' + dest);

async.each(urls, function(url, callback) {
  capture(url, dest + prettyName(url) + '.png', callback);
}, function(err){
    if(err) {
      console.error(err);
    } else {
      say(' Shot complete.')
      slimer.exit();
    }
});

function capture(url, name, callback){
  var page = webpage.create();
  page.viewportSize = {
    width:2000,
    height: 768
  };
  page.open(url, function (status) {
      page.render(name);
      say('   ' + url + ' – saved to: ' + name);
      page.close();
      callback();
  });
}

function prettyName(url){
  var clean = url.replace('https://','').replace('http://','').replace('www.','').replace(/\/$/, "").replace(/\./g,'_');
  if(tree) {
    return clean;
  }
  return clean.replace(/\//g,'-');
}

function say(what){
  if(!quiet) console.log(what);
}
