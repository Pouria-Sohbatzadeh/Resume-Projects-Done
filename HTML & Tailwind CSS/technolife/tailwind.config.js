/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
    "./pages/**/*.html", // 👈 This tells Tailwind to also scan the pages folder
    ],
  theme: {
    extend: {

      fontFamily: {
        // This is what adding a new font looks like, You have to first add the font in normal CSS with @font-face
        yekanBakh: ['yekanBakh', 'san-serif'],
        // Don't forget to seperate each new added font with a brief pause|,|symbol
      },

      // This is what adding a new color looks like
      colors: {
        deep_charcol: "#212121",
        // Don't forget to seperate each new added color with a brief pause|,|symbol
        midnight_ink: "rgb(27, 53, 112)",
        attention_red: "#DA1E28",
        buisnessBlack: "rgb(0, 0, 2)",
        ogPriceGrey: "rgb(145, 158, 188)",
        seperationLineGrey: "rgb(211, 216, 228)",
        primary_tint: "rgb(211, 216, 228)"

      }

    },
  },
  plugins: [],
}

