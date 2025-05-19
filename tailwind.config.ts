

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
   theme: {
    extend: {
      keyframes: {
        floatLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-8px)' },
        },
        floatRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
      },
      animation: {
        floatLeft: 'floatLeft 3s ease-in-out infinite',
        floatRight: 'floatRight 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  
}


export default config
