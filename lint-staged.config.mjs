const lintStagedConfig = {
  'src/**/*.{ts,tsx}': [
    () => 'tsc --noEmit',
    'eslint --cache --fix ./src',
    'prettier --write --ignore-unknown ./src',
  ],
};

export default lintStagedConfig;
