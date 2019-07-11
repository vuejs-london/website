module.exports = {
  '*.@(js|jsx|json)': ['yarn lint:prettier --write', 'yarn lint:eslint --fix', 'git add'],
  '*.css': ['yarn lint:prettier --write', 'yarn lint:stylelint --fix', 'git add'],
  '*.vue': [
    'yarn lint:prettier --write',
    'yarn lint:eslint --fix',
    'yarn lint:stylelint --fix',
    'git add',
  ],
}
