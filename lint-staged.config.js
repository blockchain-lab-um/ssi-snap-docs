module.exports = {
  "*.{js,ts,tsx}": ["eslint --fix"],
  "*.{json,md,mdx,html}": ["prettier --write"],
  "*.{ts,tsx}": () => "tsc -p tsconfig.json --noEmit --incremental false",
  "*.{css,scss}": ["stylelint --fix"],
};
