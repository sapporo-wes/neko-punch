import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

export default {
  input: "src/main.ts",
  output: {
    file: "dist/neko-punch.js",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
}
