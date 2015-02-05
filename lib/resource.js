function Resource(options) {
  this._init(options);
}
var p = Resource.prototype;
p._init = function (options) {
  this.options = options || {};
  this._analyse();
};
p._analyse = function () {

}
