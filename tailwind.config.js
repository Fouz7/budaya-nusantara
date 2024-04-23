import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'navbar-dark': 'rgba(0, 0, 0, 0.4)',
        'detail': '#D5D8D0'
      }
    },
  },
  plugins: [],
});