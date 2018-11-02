'use strict'

// this seems to fail in some versions of react-native
var G = require('window-or-global')

module.exports = function() {
  if(!G) G = {}
  if(typeof Promise !== 'undefined'){
    G.Promise = Promise
  }
  return (
    typeof G.Promise === 'function' &&
    typeof G.Promise.prototype.then === 'function'
  )
}
