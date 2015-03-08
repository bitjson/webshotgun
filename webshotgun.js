var webpage = require('webpage');
var async = require('./node_modules/async/lib/async.js');

var outputDir = 'output/';
var urls = ['https://bitpay.com', 'https://google.com'];

async.each(urls, function(url, callback) {
  capture(url, outputDir + prettyName(url) + '.png', callback);
}, function(err){
    if(err) {
      console.error(err);
    } else {
      slimer.exit();
    }
});

function capture(url, name, callback){
  var page = webpage.create();
  page.open(url, function (status) {
      page.viewportSize = {
        width:2000,
        height: 768
      };
      page.render(name);
      console.log('Captured ' + name + ': ' + url);
      page.close();
      callback();
  });
}

function prettyName(url){
  return url.replace('https://','').replace('http://','').replace('www.','').replace(/\/$/, "").replace('.','_').replace('/','-');
}
