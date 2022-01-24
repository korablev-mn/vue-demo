module.exports = {
  "stories": [
    "../src/icons/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    })
    return config;
  }
}