#!/usr/bin/env node

const fetcher = require('../dist')
const { argv, exit } = require('process')

if (argv.length < 3) {
  console.log("Usage: opengraph-fetcher URL")
  exit(1)
}

const url = argv[2]
fetcher.fetch(url)
  .then(r => console.log(r))
  .catch(e => console.error(e))

