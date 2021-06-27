"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Context module doesn't seem to respect the import order
// and beforeImport has to be executed before Prism
require("./beforeImport");
const prismjs_1 = require("prismjs");
exports.default = prismjs_1.default;
