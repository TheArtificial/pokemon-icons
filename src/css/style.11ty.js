// https://gist.github.com/liamfiddler/07e2878755a0a631a584b6420866424e
const util = require('util');
const sass = require('sass');
const renderSass = util.promisify(sass.render);
const inputFile = 'src/css/style.scss'; // the path to your main SCSS file
const outputFile = 'css/style.css'; // the filename you want this template to be saved as

module.exports = class {
  data() {
    return {
      permalink: outputFile,
      eleventyExcludeFromCollections: true,
    };
  }
  async render() {
    const result = await renderSass({
      file: inputFile,
    });

    return result.css;
  }
};
