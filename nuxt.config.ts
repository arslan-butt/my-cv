// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-27",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/image",
    "nuxt-gtag",
  ],
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },
});
