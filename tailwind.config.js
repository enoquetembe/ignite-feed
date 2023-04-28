/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*tsx", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "gray-1": "#121212",
        "gray-2": "#202024",
        "gray-3": "#323238",
        "gray-4": "#7C7C8A",
        "gray-5": "#8D8D99",
        "gray-6": "#C4C4CC",
        "gray-7": "##E1E1E6",

        "green-1": "#00875F",
        "green-2": "#00B37E",

        "red-danger": "#F75A68",
      },

      textColor: {
        "gray-1": "#121212",
        "gray-2": "#202024",
        "gray-3": "#323238",
        "gray-4": "#7C7C8A",
        "gray-5": "#8D8D99",
        "gray-6": "#C4C4CC",
        "gray-7": "##E1E1E6",

        "green-1": "#00875F",
        "green-2": "#00B37E",

        "red-danger": "#F75A68",
      },

      borderColor: {
        "gray-1": "#121212",
        "gray-2": "#202024",
        "gray-3": "#323238",
        "gray-4": "#7C7C8A",
        "gray-5": "#8D8D99",
        "gray-6": "#C4C4CC",
        "gray-7": "##E1E1E6",

        "green-1": "#00875F",
        "green-2": "#00B37E",

      },

      outlineColor: {
        "green-1": "#00875F",
        "green-2": "#00B37E",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      gridTemplateColumns: {
        wrapper: "256px 1fr",
      },
    },
  },
  plugins: [],
};
