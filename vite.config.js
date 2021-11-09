import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
const APP_ENV = process.env.APP_ENV || "";
// https://vitejs.dev/config/
export default defineConfig({
  base: `https://dino-portal.vercel.app/`,
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});
