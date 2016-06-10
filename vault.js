module.exports = function() {

var vaulted = {};

  var setValue = function(key, value) {
    vaulted[key] = value;
  };

  var getValue = function(key) {
    if(vaulted[key] === undefined) {
      return null;
    } else {
    return vaulted[key];
    }
  };



  return {
    setValue: setValue,
    getValue: getValue
  };
};