module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pallet1: {
          navyBlue: "#05445E",
          blueGrotto: "#189AB4",
          blueGreen: "#75E6DA",
          babyBlue: "#D4F1F4",
        },
        pallet2: {
          sandDollar: "#E5DDC8",
          teal: "#01949A",
          navyBlue: "#004369",
          red: "#DB1F48",
        },
        pallet3: {
          blueGray: "#90ADC6",
          pewter: "#E9EAEC",
          yellow: "#FAD02C",
          darkBlue: "#333652",
        },
      },
      height : {
        lg: '92%',
        '9/10': '90%',
        '1/10':'10%',
        100:'400px',
      },
      width: {
        100:'400px',
        125: '500px',
        '7/10': '70%',
        '3/10':'30%',
        '9/10':'90%',
        '1/10':'10%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
