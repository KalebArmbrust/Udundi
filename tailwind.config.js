/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './src/**/*.{vue,html,js,ts,jsx,tsx}',
          ],
  plugins: [],
  theme: {
    extend: {
        keyframes: {
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-50px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'expand': {
              '0%': {
                transform: 'scale(0) translate(0, 0)',
            },
              '100%': {
                  transform: 'scale(1) translate(50, -50)',
              },
          },
        },
        animation: {
            'fade-in-down': 'fade-in-down 2s ease-out',
            'expand': 'expand .5s ease-in-out',
        },
        fontFamily: {
          'Lato': ['Lato']
        },
      },
},
variants: {},
}

