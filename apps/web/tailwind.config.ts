import type { Config } from 'tailwindcss';
import fluid, { extract, screens } from 'fluid-tailwind';

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    screens,
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        dancingScript: ['var(--font-dancing-script)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [fluid],
};
export default config;
