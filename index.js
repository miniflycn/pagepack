var url = require('url')
  , fs = require('fs')
  , cheerio = require('cheerio')
  , get = require('./lib/get');

function Grab(path, options) {
  this._init(path, options)
}
var p = Grab.prototype;
p._init = function (path, options) {
  options = options || {};
  this.options = options;

  var self = this;

  setImmediate(function () {
    get(path)
      .on('body', function (body) {
        self._analyse(
          cheerio.load(body)
        );
      });
  });
};
p._analyse = function ($) {
  console.log($);
  // TODO digging into webpack and find it how to do
};

new Grab('http://ke.qq.com');
