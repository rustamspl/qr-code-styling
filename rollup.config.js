import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.esm.js",
    format: "esm"
  },
  plugins: [resolve(), commonjs(), typescript(), terser()]
};
