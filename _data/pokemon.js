// If you want to edit the data, you should be in the YAML file (pokemon.yml)
//
// This file is a script that makes the YAML accessible to Eleventy for rendering
// It can be deprecated when https://github.com/11ty/eleventy/issues/630 is resolved

module.exports = function() {
    return [
        {number: 001, name: 'bulbasaur'},
        {number: 001, name: 'bulbasaur-shiny'},
        {number: 137, name: 'porygon'}
    ];
  };
