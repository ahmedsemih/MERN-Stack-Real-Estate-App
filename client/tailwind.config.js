/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
    colors: {
      bgcolor: "var(--bg)",
      "bgcolor-soft": "var(--bg-soft)",
      textcolor: "var(--text)",
      "textcolor-soft": "var(--text-soft)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
    },
  },
  plugins: [],
};
