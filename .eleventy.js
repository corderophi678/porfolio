const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginRss);

  config.addLayoutAlias("base", "layouts/base.njk");
  config.addLayoutAlias("page", "layouts/page.njk");
  config.addLayoutAlias("post", "layouts/post.njk");

  config.addPassthroughCopy("src/assets");

  config.addCollection("posts", collection => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src"
    }
  };
};
