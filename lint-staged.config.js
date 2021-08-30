module.exports = {
  'src/**/*.js?(x)': ['npm run lint:js', 'npm run format'],
  'src/**/*.{js?(x),css,scss,less}': ['npx --no-install stylelint --fix'],
}
