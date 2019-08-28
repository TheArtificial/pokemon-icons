// If you want to edit the data, you should be in the YAML file (pokemon.yml)
//
// This file is a script that makes the YAML accessible to Eleventy for rendering
// It can be deprecated when https://github.com/11ty/eleventy/issues/630 is resolved

const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = function() {
    return yaml.safeLoad(fs.readFileSync('_data/pokemon.yml', 'utf8'));
  };
