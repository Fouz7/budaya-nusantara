import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'navbar-dark': 'rgba(0, 0, 0, 0.4)',
        'detail': '#D5D8D0',
        'member': '#1C0264',
        'leader': '#0180DC'
      },
      height: {
        '102': '28rem',
      }
    },
    marginBottom: {
      '1.25': '-0.5125rem',
    }
  },
  plugins: [],
});