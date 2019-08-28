module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy({"_prepared_assets": "assets"});

  eleventyConfig.setUseGitIgnore(false);

  return {
    templateFormats: [
      "js",
      "njk"
    ],

    pathPrefix: "/",

    // markdownTemplateEngine: "njk",
    // htmlTemplateEngine: "njk",
    // dataTemplateEngine: "njk"

    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "../_data",
      output: "_site"
    }
  };
};
