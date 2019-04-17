module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
