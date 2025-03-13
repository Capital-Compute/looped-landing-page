const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat .5s ease-in-out infinite',
        scroll: "scroll 10s linear infinite"
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg,  #FFFFFF,#F686DC)',
      },
      filter: {
        'blur-10': 'blur(10%)',
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      screens: {

        'ss': '375px',
        'ms':'430px',

        'xs': '500px',

        'sm': '640px',

        'md': '768px',

        'lm': '890px',

        'll': '960px',
  
        'lg': '1024px',
  
        'xl': '1280px',
        'xxl':'1290px',
        '2xl': '1536px',
        '3xl': '1620px',

      }
    },
  },
  plugins: [],
};
