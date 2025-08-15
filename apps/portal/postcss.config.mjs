import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, "tailwind.config.mjs"),
    },
    autoprefixer: {},
  },
};

export default config;
