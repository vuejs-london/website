const base = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['plugin:vue/base'],
  plugins: ['json', 'unicorn', 'vue-a11y', 'sort-imports-es6-autofix'],
}

const compat = {
  ...base,
  extends: [...base.extends, 'plugin:compat/recommended'],
  settings: {
    ...base.settings,
    polyfills: [],
  },
}

const withSetup = {
  ...compat,
  extends: [
    ...compat.extends,
    'eslint:recommended',
    'standard',
    'plugin:unicorn/recommended',
    'plugin:vue/recommended',
    'plugin:vue-a11y/recommended',
    'prettier',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue',
  ],
  rules: {
    'no-console': 1,

    'unicorn/import-index': 0,
    'unicorn/filename-case': 0,
    'unicorn/prevent-abbreviations': 0,

    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
}

function getEslintConfig() {
  switch (process.env.LINT_BASE) {
    case true:
    case 'base':
      return base
    case 'compat':
      return compat
    case 'default':
    default:
      return withSetup
  }
}

module.exports = getEslintConfig()
