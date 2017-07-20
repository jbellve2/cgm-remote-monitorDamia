'use strict';

var browserify_express = require('browserify-express');

function bundle() {
  return browserify_express({
    entry: __dirname + '/bundle.source.js',
    watch: __dirname + '/../lib/',
    mount: '/public/js/bundle.js',
    verbose: true,
    minify: true,
    bundle_opts: { debug: true }, // enable inline sourcemap on js files
    write_file: __dirname + '/bundle.out.js'
  });
}

module.exports = bundle;
