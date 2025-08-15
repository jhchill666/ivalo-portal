import { defineConfig } from "@ivalo/tsup-config";
import { resolve as nodeResolve } from "node:path";

const resolve = (path: string) => nodeResolve(__dirname, path);

export default defineConfig({
  tsconfig: resolve("./tsconfig.json"),
  outDir: resolve("dist"),
  entry: {
    index: resolve("src/index.ts"),
    env: resolve("src/config/env.ts"),
    schema: resolve("src/schema/index.ts"),
  },
});
