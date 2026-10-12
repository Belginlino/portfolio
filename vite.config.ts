import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    {
      name: "pdf-headers",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.toLowerCase().includes("belgin_lino_resume.pdf")) {
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", 'inline; filename="Belgin_Lino_Resume.pdf"');
          }
          next();
        });
      },
    },
  ],
});
