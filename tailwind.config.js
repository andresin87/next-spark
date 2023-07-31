const sparkPlugins = require("@spark-ui/tailwind-plugins");
const themeUtils = require("@spark-ui/theme-utils");

const lbcTheme = require("./theme/leboncoin/light.js");
// const lbcProTheme = require("./theme/leboncoin/pro.js");
// const subitoTheme = require("./theme/subito/default.js");
// const kleinanzeigenTheme = require("./theme/kleinanzeigen/default.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@spark-ui/**/*.{js,mjs}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    ...sparkPlugins.sparkConfig({
      htmlFontSize: 16, // replace this value with your app's base font size if needed (default: 16)
      themes: {
        default: themeUtils.defaultTheme,
        // kleinanzeigen: kleinanzeigenTheme.defaultTheme,
        ['leboncoin-light']: lbcTheme.privateTheme,
        ['leboncoin-dark']: lbcTheme.privateTheme,
        // "leboncoin-pro": lbcProTheme.proTheme,
        ['spark-light']: themeUtils.defaultTheme,
        ['spark-dark']: themeUtils.defaultThemeDark,
        // subito: subitoTheme.defaultTheme,
      },
    }),
  ],
};
