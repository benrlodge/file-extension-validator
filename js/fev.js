'use strict';

var fileExtensionValidator = function(obj){
  this.file = obj.file;
  this.fileTypes = obj.fileTypes;
  console.log(obj);
};

fileExtensionValidator.prototype = {
    
  _goodExtension: function(ext){
    if (this.fileTypes.indexOf(ext) === -1){ return false; }
    return true;
  },

  _getExtension: function(){
    var parts = this.file.split('.');
    this.ext = parts[parts.length - 1];
  },

  // public methods
  validateExt: function(){
    this._getExtension();
    return this._goodExtension(this.ext);
  }

};