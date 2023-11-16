/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Sans", "sans-serif"],
      "darker-grotesque": ["Darker Grotesque", "sans-serif"],
    },
    colors: {
      "purple-mimosa": "#AE7AFF",
      "medium-purple": "#8B62CC",
      "lavender-mist": "#EFE4FF",
      "cream-burlee": "#FAE8A4",
      "sea-pink": "#E99898",
      chinook: "#98E9AB",
      "floral-white": "#FEFAED",
      amour: "#FBEAEA",
      "aqua-spring": "#EAFBEE",
      "green-white": "#E7E8E9",
      "shuttle-gray": "#5F646D",
      fantasy: "#FAF4F0",
    },
    fontSize: {
      base: ["1rem", "1rem"],
      sm: ["0.75rem", "0.75rem"],
      lg: ["1.25rem", "1.25rem"],
      xl: ["1.5rem", "1.5rem"],
      "2xl": ["1.75rem", "1.75rem"],
      "3xl": ["2.75rem", "2.75rem"],
      "4xl": ["3.25rem", "3.25rem"],
      "5xl": ["4rem", "4rem"],
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
