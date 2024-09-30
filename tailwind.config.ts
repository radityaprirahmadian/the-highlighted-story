import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pumpkin: {
          "100": "#E77843",
          "40": "#f47e38",
          "30": "#f58d4e",
          "20": "#f79b64",
          "10": "#f8a97a",
        },
        "light-orange": {
          "50": "#fde8d3",
          "60": "#fde3ca",
          "70": "#fcdec1",
          "80": "#fcd9b8",
          "90": "#fbd5af",
          "100": "#FBD0A6",
        },
        "earth-yellow": {
          "100": "#FAF0D7",
        },
        carribean: {
          "10": "#4f96a0",
          "20": "#4f96a0",
          "30": "#358792",
          "40": "#1c7885",
          "50": "#036977",
          "60": "#035f6b",
          "70": "#02545f",
          "80": "#024a53",
          "90": "#023f47",
          "100": "#02353c",
        },
        ["persian-red"]: {
          "10": "#e18585",
          "20": "#dc7070",
          "30": "#d75c5c",
          "40": "#d24747",
          "50": "#cd3333",
          "60": "#b92e2e",
          "70": "#a42929",
          "80": "#902424",
          "90": "#7b1f1f",
          "100": "#671a1a",
        },
        ["falu-red"]: {
          "10": "#aa7b77",
          "20": "#9c6560",
          "30": "#8e4f49",
          "40": "#803933",
          "50": "#72231c",
          "60": "#672019",
          "70": "#5b1c16",
          "80": "#501914",
          "90": "#441511",
          "100": "#39120e",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
