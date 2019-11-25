const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPlugin(inclusiveLangPlugin)

  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["md","html"],
    words: "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy"
  })

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    passthroughFileCopy: true
  }
}