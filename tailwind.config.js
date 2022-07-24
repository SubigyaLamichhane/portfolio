/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './**/*.{js,jsx,tsx,ts,html}',
    // './*/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        from: '#c31432',
        to: '#240b36',
        blank: '#F3F2F1',
        ticTacToe: '#be6fde',
        kecThoughts: '#808080',
        infrastructureAmbulance: '#dab570',
      },
      spacing: {
        8: '8px',
        16: '16px',
        32: '32px',
        64: '64px',
        96: '96px',
        128: '128px',
        144: '144px',
        256: '256px',
        500: '500px',
      },
      lineHeight: {
        h1: '144px',
        // h3: '60px',
        p: '30px',
        h4: '48px',
        h3: '76px', // 72px
        phoneh1: '78.65px',
        phoneh4: '42px',
        phonep: '26px',
        phoneh3: '48px',
      },
      fontSize: {
        h1: '5.653em',
        h2: '3.998em',
        h3: '2.827em',
        h4: '1.999em',
        h5: '1.414em',
        p: '1em',
        sm: '0.707em',
        xsm: '0.5em',
        phoneh5: '1.25em',
        phoneh4: '1.563em',
        phoneh3: '1.953em',
        phoneh2: '2.441em',
        phoneh1: '3.051em',
      },
      fontFamily: {
        light: 'Bradon Grostesque Light',
        bold: 'Bradon Grostesque Bold',
        proxima: 'Proxima Nova',
      },
    },
  },
  plugins: [],
};
