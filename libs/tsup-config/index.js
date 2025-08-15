import { TsconfigPathsPlugin } from "@esbuild-plugins/tsconfig-paths";
import { defineConfig as defineTsupConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

/**
 * @type {import('tsup').Options}
 */
export const baseConfig = {
  entry: ["src/index.ts"],
  format: ["esm"],
  outExtension: () => ({ js: ".js", dts: ".d.ts" }),
  outDir: "dist",
  target: ["node18", "es2022"],
  sourcemap: true,
  clean: true,
  tsconfig: "./tsconfig.json",
  dts: true,
  platform: "node",

  // Env specific
  watch: false,
  minify: isProduction,
  treeshake: isProduction,
  bundle: true,
  shims: true,
  silent: true,
};

export const defineConfig = (options) => {
  const config = {
    ...baseConfig,
    ...options,
  };

  if (options?.tsconfig) {
    config.esbuildPlugins = [
      TsconfigPathsPlugin({ tsconfig: options.tsconfig }),
    ];
  }

  return defineTsupConfig(config);
};
