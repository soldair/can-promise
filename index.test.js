'use strict'

var test = require('tape')
var semver = require('semver')
var canPromise = require('./index')

var nodeVerWithPromise = '0.11.13'
var currentNodeVer = process.version

test('Can promise', function(t) {
  t.plan(2)

  if (semver.lt(currentNodeVer, nodeVerWithPromise)) {
    t.notOk(
      canPromise(),
      'Should return false if node version is < ' + nodeVerWithPromise
    )
  } else {
    t.ok(
      canPromise(),
      'Should return true if node version is >= ' + nodeVerWithPromise
    )
  }

  // Temporarily delete Promise
  var defaultPromise
  if (global.Promise) {
    defaultPromise = global.Promise
    delete global.Promise
  }

  t.ok(!canPromise(), 'Should return false if Promise is not available')

  // Restore
  if (defaultPromise) {
    global.Promise = defaultPromise
  }
})
