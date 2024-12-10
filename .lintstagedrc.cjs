module.exports = {
  "*.{js,ts,svelte}": ["prettier --write", "eslint"],
  "!*.{js,ts,svelte}":
    "prettier --write --ignore-unknown --no-error-on-unmatched-pattern",
};
