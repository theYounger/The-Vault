module.exports = function() {

var vaultCode = {};

  var setValue = function(key, value) {
    vaultCode[key] = value;
  };

  var getValue = function(key) {
    if(vaultCode.key === undefined) {
      return null;
    } else {
    return vaultCode[key];
    }
  };


  return {
    setValue: setValue,
    getValue: getValue
  };
};

vault.setValue("mypass", "devleague");