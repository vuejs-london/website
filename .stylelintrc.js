const base = {
  'custom-syntax': 'postcss-html',
}

const compat = {
  ...base,
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: ['object-fit'],
        severity: 'warning',
      },
    ],
  },
}

const withSetup = {
  ...compat,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],
  rules: {
    ...compat.rules,
    'no-empty-source': null,
    'custom-property-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'context'],
      },
    ],
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'at-rule-name-space-after': null,
    'function-calc-no-unspaced-operator': null,
  },
}

function getStylelintConfig() {
  switch (process.env.LINT_BASE) {
    case 'base':
      return base
    case 'compat':
      return compat
    case 'default':
    default:
      return withSetup
  }
}

module.exports = getStylelintConfig()
