const markdownIt = require('markdown-it')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language")

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateDisplay", require("./filters/dateDisplay.js"))
  eleventyConfig.addFilter("valueIfEmpty", require("./filters/valueIfEmpty.js"))

  eleventyConfig.addPassthroughCopy("src/CNAME")
  eleventyConfig.addPassthroughCopy("src/robots.txt")
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/css")
  eleventyConfig.addPassthroughCopy("src/scripts")
  eleventyConfig.addPlugin(inclusiveLangPlugin)

  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["md","html"],
    words: "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy"
  })

  const markdownEngine = markdownIt({ html: true })
  eleventyConfig.setLibrary('md', markdownEngine)

  // Unsorted items (in whatever order they were added)
  eleventyConfig.addCollection("allContent", function(collectionApi) {
    return collectionApi.getAll()
  })

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes"
    },
    // htmlTemplateEngine: "nunjucks",
    // markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  }
}