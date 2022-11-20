import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@rollup/plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    {
      ...eslint({
        include: "src/**/*.+(ts|tsx)",
      }),
      enforce: "pre",
    },
    tsconfigPaths(),
  ],
});
