import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        state : {
          900 : "#0F172A",
          800 : "1E293B",
          500 : "#64748B",
          400 : "#94A3B8",
          300 : "#DBD5E1",
          200 : "#E2E8F0",
          100 : "#F1F5F9"
        },
        violet : {
          600 : "#7C3AED",
          100 : "#EDE9FE"
        },
        rose : {
          500 : "#F43F5E"
        },
        lime : {
          300 : "#BEF264"
        },
        amber : {
          800 : "#92400E"
        }
      },
      screens : {
        "web-lg" : "1920px",
        "web-md" : "744px",
        "web-sm" : "375px"
      }
    },
  },
  plugins: [],
};
export default config;
