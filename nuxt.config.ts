// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL,
    },
  },
  css: ["~/assets/css/global.css"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@materializecss/materialize@2.2.2/dist/js/materialize.min.js",
          defer: true,
        },
        { src: "https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js", defer: true },
        { src: "https://kit.fontawesome.com/8f1caa7fe1.js", crossorigin: "anonymous", defer: true },
        { src: "https://code.jquery.com/jquery-3.6.0.min.js", defer: true },
        { src: "https://unpkg.com/showdown@2.1.0/dist/showdown.min.js", defer: true },
        { src: "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js", defer: true },
        { src: "https://unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js", defer: true },
        { src: "https://unpkg.com/cursor-effects@latest/dist/browser.js", defer: true },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@materializecss/materialize@2.2.2/dist/css/materialize.min.css",
        },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/wowjs@1.1.3/css/libs/animate.min.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
    },
  },
});
