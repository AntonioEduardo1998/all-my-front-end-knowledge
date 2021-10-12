module.exports = {
  root: true,
  ignorePatterns: ["**/assets"],
  overrides: [
    {
      files: ["./**/*.js"],
      extends: ["google"],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      rules: {
        "no-debugger": "error",
        indent: ["error", 2, { SwitchCase: 1 }],
        "space-before-function-paren": [
          "error",
          {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
          },
        ],
        "object-curly-spacing": ["error", "always"],
        "linebreak-style": "off",
        "max-len": "off",
        "valid-jsdoc": "off",
        "require-jsdoc": "off",
        "guard-for-in": "off",
        "no-invalid-this": "off",
        "prefer-promise-reject-errors": "off",
      },
    },
    {
      files: ["./**/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        project: "./tsconfig.json",
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "./tsconfig.json",
          },
        },
      },
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "oc",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "oc",
            style: "camelCase",
          },
        ],
        "@angular-eslint/prefer-output-readonly": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "explicit",
            overrides: { constructors: "no-public" },
          },
        ],
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: { delimiter: "comma", requireLast: true },
            singleline: { delimiter: "comma", requireLast: false },
            overrides: {
              interface: {
                multiline: { delimiter: "semi", requireLast: true },
                singleline: { delimiter: "semi", requireLast: false },
              },
            },
          },
        ],
        "array-bracket-newline": ["error", "consistent"],
        "array-element-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "multiline-arguments"],
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              "./src/test.ts",
              "./**/*.{d,spec}.ts",
              "./*.{js,ts}",
            ],
          },
        ],
        "import/order": [
          "error",
          {
            alphabetize: { order: "asc" },
            pathGroups: [
              {
                pattern: "angular",
                group: "external",
              },
            ],
            "newlines-between": "always",
          },
        ],
        "import/prefer-default-export": "off",
        "max-len": [
          "error",
          120,
          2,
          {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        "object-curly-newline": ["error", { consistent: true }],
        "object-curly-spacing": ["error", "always"],
        "no-restricted-imports": ["error", { patterns: ["../*", "./*"] }],
      },
    },
    // Angular component HTML
    {
      files: ["./**/*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
    },
  ],
};
