module.exports = {
  "*.{js,jsx,ts,tsx}": ["npx nx run-many --target=lint"],
  // FIXME: prettier and eslint need to be integrated with monorepo
  // "*.{js,jsx}": ["eslint --cache --fix", "prettier --write"],
  // "**/*.{css,json}": ["prettier --write"],
  // "*.{ts,tsx}": [
  //   "eslint --cache --fix",
  //   () => "tsc --project tsconfig.json --pretty --skipLibCheck --noEmit",
  //   "prettier --write",
  // ],
};
