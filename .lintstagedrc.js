module.exports = {
  '*.@(js|jsx|json)': ['yarn lint:prettier --write', 'yarn lint:eslint --fix'],
  '*.css': ['yarn lint:prettier --write', 'yarn lint:stylelint --fix'],
  '*.vue': ['yarn lint:prettier --write', 'yarn lint:eslint --fix', 'yarn lint:stylelint --fix'],
}
