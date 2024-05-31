// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {
//       keyframes: {
//         zoomInOut: {
//           '0%, 100%': { transform: 'scale(1)' },
//           '90%': { transform: 'scale(1.2)' },
//         },
//       },
//       animation: {
//         zoomInOut: 'zoomInOut 7s ease-in-out infinite',
//       },
//       rotate: {
//         '-180': '-180deg',
//         '-90': '-90deg',
//         '-45': '-45deg',
//         '0': '0',
//         '45': '45deg',
//         '90': '90deg',
//         '135': '135deg',
//         '180': '180deg',
//         '270': '270deg',
//         '780': '780deg',

//       }
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        zoomInOutBg: {
          '0%, 100%': { transform: 'scale(1)' },
          '90%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        zoomInOutBg: 'zoomInOutBg 7s ease-in-out infinite',
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '0': '0',
        '45': '45deg',
        '90': '90deg',
        '135': '135deg',
        '180': '180deg',
        '270': '270deg',
        '780': '780deg',
      },
    },
  },
  plugins: [],
};

