/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        fade: "fadeIn 1s",
      },
      backgroundImage: {
        "map-image": "url('/map.png')",
        "aboutme-profile": "url('/AboutMe_profile.jpg')",
        "office-background": "url('/office-image-bg.webp')",
        "mass-icon": "url('/mass-icons.png')",
      },
    },
  },
  plugins: [],
};
