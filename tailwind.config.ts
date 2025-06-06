import type { Config } from "tailwindcss";

/**
 * For the screens the default screen values that tailwindcss uses 
 * were modified, be awere that changing them will affect the layout
 * of the website.
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[#b0f2c2]",
    "bg-[#fcb7af]",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_green: '#95bb72',
        indigo_blue: '#4e86c6',
        kinda_red: '#e94e70',
        tacao: "#f2a68c",
        wheat: "#f4d5b8",
        powder_blue: "#a8e4e6",
        green_1: '#f4fceb',
      },
    },
    screens: {
      'sm': "480px",
      'md': "768px",
      'lg': "1010px",
      'xl': "1280px",
      '2xl': "1536px"
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [
  ],
};

export default config;
