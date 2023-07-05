// defineNuxtConfig mozna bude chtit vratit back

export default {
  css: ["vuetify/lib/styles/main.sass", "@/assets/css/main.css"],
  build: {
    transpile: ["vuetify"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  ssr: true,

  buildModules: ["@nuxt/postcss8"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  googleFonts: {
    families: {
      Poppins: true,
    },
  },
};
