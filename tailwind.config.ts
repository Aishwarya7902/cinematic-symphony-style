import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        hindi: ['Noto Serif Devanagari', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        royal: {
          bg: "hsl(var(--royal-bg))",
          "bg-deep": "hsl(var(--royal-bg-deep))",
          gold: "hsl(var(--royal-gold))",
          "gold-light": "hsl(var(--royal-gold-light))",
          maroon: "hsl(var(--royal-maroon))",
          cream: "hsl(var(--royal-cream))",
        },
        temple: {
          bg: "hsl(var(--temple-bg))",
          warm: "hsl(var(--temple-warm))",
          saffron: "hsl(var(--temple-saffron))",
          deep: "hsl(var(--temple-deep))",
          copper: "hsl(var(--temple-copper))",
          cream: "hsl(var(--temple-cream))",
        },
        floral: {
          bg: "hsl(var(--floral-bg))",
          green: "hsl(var(--floral-green))",
          "green-light": "hsl(var(--floral-green-light))",
          pink: "hsl(var(--floral-pink))",
          cream: "hsl(var(--floral-cream))",
          gold: "hsl(var(--floral-gold))",
        },
        baraat: {
          bg: "hsl(var(--baraat-bg))",
          red: "hsl(var(--baraat-red))",
          orange: "hsl(var(--baraat-orange))",
          yellow: "hsl(var(--baraat-yellow))",
          pink: "hsl(var(--baraat-pink))",
          cream: "hsl(var(--baraat-cream))",
        },
        luxury: {
          bg: "hsl(var(--luxury-bg))",
          gold: "hsl(var(--luxury-gold))",
          "gold-light": "hsl(var(--luxury-gold-light))",
          charcoal: "hsl(var(--luxury-charcoal))",
          cream: "hsl(var(--luxury-cream))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
