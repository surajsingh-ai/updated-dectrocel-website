import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      // Generate a browser-only shell so the production site can be hosted
      // as static files by IIS without a Node.js process.
      spa: {
        enabled: true,
      },
    }),
    nitro(),
    tailwindcss(),
    viteReact(),
  ],
});
