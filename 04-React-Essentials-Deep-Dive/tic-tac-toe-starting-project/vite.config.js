import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-complete-guide-course/04-React-Essentials-Deep-Dive/",
});
