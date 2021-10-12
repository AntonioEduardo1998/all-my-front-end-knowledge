const namePattern = /([a-z0-9]+|#\{\$.*\})((-[a-z0-9]+|#\{\$.*\})+)?/;

module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-sass-guidelines",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-color-format",
    "stylelint-prettier",
    "stylelint-selector-bem-pattern",
  ],
  rules: {
    "alpha-value-notation": "percentage",
    "at-rule-disallowed-list": ["import", "media"],
    "color-format/format": {
      format: "hsl",
    },
    "color-function-notation": "legacy", // TODO: change when https://github.com/microsoft/vscode/issues/43111 is resolved
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "function-parentheses-space-inside": "never-single-line",
    "hue-degree-notation": "number",
    "max-nesting-depth": [
      1,
      {
        ignore: "pseudo-classes",
        ignoreAtRules: ["each", "include", "media", "supports"],
      },
    ],
    "no-empty-source": null,
    "no-descending-specificity": null,
    "plugin/selector-bem-pattern": {
      preset: "bem",
      implicitComponents: [
        "src/**/*.component.scss",
        "src/styles/directives/**/*.scss",
      ],
      componentName: "[a-z]+",
      componentSelectors: (componentName) =>
        new RegExp(
          `^\\.(${componentName})(((--|__)(${namePattern.source}))+)?$`
        ),
      ignoreSelectors: [/^\.mat-.+$/, /^\.cdk-.+$/, /^%.+/],
    },
    "prettier/prettier": [
      true,
      {
        singleQuote: true,
        printWidth: 100,
      },
    ],
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"],
      },
    ],
    "selector-class-pattern": null,
    "string-quotes": "single",
  },
};
