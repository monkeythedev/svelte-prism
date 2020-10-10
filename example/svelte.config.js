/** @type {import('svelte-preprocess')["default"]} */
// @ts-ignore
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    typescript: true
  }),
  preserveWhitespace: true,
  dev: process.env.NODE_ENV !== "production"
};
