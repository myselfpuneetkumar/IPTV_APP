import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
   tailwindcss(),
   VitePWA({
            registerType: "autoUpdate",

            manifest: {
                name: "Live IPTV App",
                short_name: "IPTV",
                description: "Live IPTV Application",
                theme_color: "#000000",
                background_color: "#000000",
                display: "standalone",

                icons: [
                    {
                        src: "/logo.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/logo.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
  ],
})



// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// export default defineConfig({
//     plugins: [
//         react(),

//         VitePWA({
//             registerType: "autoUpdate",

//             manifest: {
//                 name: "My IPTV App",
//                 short_name: "IPTV",
//                 description: "Live IPTV Application",
//                 theme_color: "#000000",
//                 background_color: "#000000",
//                 display: "standalone",

//                 icons: [
//                     {
//                         src: "/icon-192.png",
//                         sizes: "192x192",
//                         type: "image/png"
//                     },
//                     {
//                         src: "/icon-512.png",
//                         sizes: "512x512",
//                         type: "image/png"
//                     }
//                 ]
//             }
//         })
//     ]
// });
