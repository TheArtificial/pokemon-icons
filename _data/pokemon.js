// This file is a script that makes the filenames of SVG icons accessible to Eleventy for rendering

const fs   = require('fs');

module.exports = function() {
  var filter = /(\d\d\d)\-(.*)\.svg/;
  var filenames = fs.readdirSync('_icons/SVG/', {withFileTypes: false});
  var filtered = filenames.reduce(function(filtered, filename) {
    var parsed = null;
    if (parsed = filter.exec(filename)) {
       var pokemon = { number: parsed[1], name: parsed[2] }
       filtered.push(pokemon);
       console.log(filename, pokemon);
    }
    return filtered;
  }, []);

  return filtered;
};
