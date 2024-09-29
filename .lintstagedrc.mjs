export default {
  "src/*.{ts, tsx}": [
    () => "tsc --noEmit",
  ],
  "src/*": [
    "eslint --cache --fix ./src",
    "prettier --write ./src",
  ]
}