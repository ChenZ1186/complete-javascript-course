var outerf = (function () {
  var x = 10;
  var innerf = function (a) {
    return x + a
  } 
  return {
    object: function(b) {
      return (innerf(b));
    }
  }
})();