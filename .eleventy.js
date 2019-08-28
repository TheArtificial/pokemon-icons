module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  return {
    templateFormats: [
      "js",
      "njk",
      "svg" // to copy the pokeball background
    ],

    pathPrefix: "/",

    // markdownTemplateEngine: "njk",
    // htmlTemplateEngine: "njk",
    // dataTemplateEngine: "njk",

    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
