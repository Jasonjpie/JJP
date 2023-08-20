import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'playfair': ['Playfair Display'],
        'poppins': ['Poppins', 'sans-serif']

    },
      colors:{
        primary:'#7275F0'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('vidstack/tailwind.cjs')({
      prefix: 'media', // paused:... -> media-paused:...
    }),
  ],
}

export default config
