import dts from "rollup-plugin-dts";

export default {
  input: "dist/types/index.d.ts",
  output: {
    file: "dist/bundle.d.ts",
    format: "es"
  },
  plugins: [dts()]
};
