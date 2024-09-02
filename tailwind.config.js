/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-default-default": "#fff",
        "border-default-default": "#d9d9d9",
        "text-default-secondary": "#757575",
        "text-default-default": "#1e1e1e",
        "miscellaneous-floating-tab-text-unselected": "#000",
        darkgray: "#afafaf",
        "miscellaneous-floating-tab-text-selected": "#007aff",
        gray: "#7d7d7d",
        lightgray: '#e3e3e3'
      },
      spacing: {
        "space-200": "8px",
        "space-400": "16px",
        "space-300": "12px",
        "space-100": "4px",
        "padding-lg": "16px",
        "padding-sm": "8px",
      },
      fontFamily: {
        "body-small": "Inter",
        kalam: "Kalam",
        roboto: "Roboto",
        aclonica: "Aclonica",
      },
      borderRadius: {
        "981xl": "1000px",
        "81xl": "100px",
        "581xl": "600px",
        "8xs-8": "4.8px",
        "radius-200": "8px",
        "radius-md": "8px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "2xl": "21px",
      mid: "17px",
      xs: "12px",
      mini: "15px",
      smi: "13px",
      "3xs-6": "9.6px",
      "4xs-4": "8.4px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
