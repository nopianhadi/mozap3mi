import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
        // PT. Moza Group Indonesia Brand Colors
        brand: {
          red: {
            DEFAULT: "hsl(var(--brand-red) / <alpha-value>)",
            light: "hsl(var(--brand-red-light) / <alpha-value>)",
            dark: "hsl(var(--brand-red-dark) / <alpha-value>)",
          },
          blue: {
            DEFAULT: "hsl(var(--brand-blue) / <alpha-value>)",
            light: "hsl(var(--brand-blue-light) / <alpha-value>)",
            dark: "hsl(var(--brand-blue-dark) / <alpha-value>)",
          },
          gold: {
            DEFAULT: "hsl(var(--brand-gold) / <alpha-value>)",
            light: "hsl(var(--brand-gold-light) / <alpha-value>)",
            dark: "hsl(var(--brand-gold-dark) / <alpha-value>)",
          },
          green: {
            DEFAULT: "hsl(var(--brand-green) / <alpha-value>)",
            light: "hsl(var(--brand-green-light) / <alpha-value>)",
            dark: "hsl(var(--brand-green-dark) / <alpha-value>)",
          },
          navy: {
            DEFAULT: "hsl(var(--brand-navy) / <alpha-value>)",
            light: "hsl(var(--brand-navy-light) / <alpha-value>)",
          },
        },
        // Country Destination Colors
        country: {
          japan: "hsl(var(--country-japan) / <alpha-value>)",
          hongkong: "hsl(var(--country-hongkong) / <alpha-value>)",
          taiwan: "hsl(var(--country-taiwan) / <alpha-value>)",
          australia: "hsl(var(--country-australia) / <alpha-value>)",
          europe: "hsl(var(--country-europe) / <alpha-value>)",
          kuwait: "hsl(var(--country-kuwait) / <alpha-value>)",
        },
        // Semantic Colors
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          light: "hsl(var(--success-light) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          light: "hsl(var(--warning-light) / <alpha-value>)",
        },
        error: {
          DEFAULT: "hsl(var(--error) / <alpha-value>)",
          light: "hsl(var(--error-light) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          light: "hsl(var(--info-light) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Roboto Mono", "Menlo", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
