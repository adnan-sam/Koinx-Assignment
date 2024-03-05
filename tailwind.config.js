/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eff2f5",
        },
        white: "#fff",
        mintcream: "#ebf9f4",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e6e6e6",
          "300": "#dee2e6",
          "400": "#d1e0db",
        },
        mediumseagreen: "#14b079",
        "gray-1": "#0f152a",
        "primary-blue": "#0052fe",
        "gray-5": "#dee1e6",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury":
          "#e3e3e3",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray":
          "#171717",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10":
          "rgba(238, 104, 85, 0.1)",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo":
          "#e96975",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft":
          "#202020",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6":
          "rgba(10, 178, 125, 0.06)",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock":
          "#32be88",
        gray: {
          "100": "#111827",
          "200": "#0b1426",
        },
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude":
          "#e8f4fd",
        "day-gray-06": "#788f9b",
        "absolute-green": "#0fba83",
        lightslategray: {
          "100": "#808a9d",
          "200": "#768396",
        },
        "absolute-red": "#f7324c",
        "groww-in-stocks-zomato-ltd-1440x810-default-gun-powder": "#44475b",
        "groww-in-stocks-zomato-ltd-1440x810-default-waterloo": "#7c7e8c",
        "groww-in-stocks-zomato-ltd-1440x810-default-french-gray": "#c7c8ce",
        "groww-in-stocks-zomato-ltd-1440x810-default-persian-green": "#00b386",
        "day-gray-07": "#3e5765",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark":
          "#191c1f",
        "absolute-black": "#000",
        "day-gray-04": "#d3e0e6",
        "text-2": "#3e424a",
        "primary-darkblue": "#0141cf",
        dimgray: "#666",
        darkslategray: "#333",
        slategray: {
          "100": "#667085",
          "200": "#5c697d",
          "300": "#5d667b",
        },
        lavender: "#e2ecfe",
      },
      spacing: {},
      fontFamily: {
        h3: "Inter",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14":
          "'SF Pro Text'",
      },
      borderRadius: {
        "6xs-3": "6.3px",
        "11xs-3": "1.3px",
        "4xs-2": "8.2px",
        "5xs-5": "7.5px",
        "6xs-7": "6.7px",
        "6xs-2": "6.2px",
        "4xs-4": "8.4px",
        "9xl": "28px",
        "3xs": "10px",
        "sm-2": "13.2px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      "3xl": "22px",
      "smi-6": "12.6px",
      "5xs-6": "7.6px",
      "2xs-1": "10.1px",
      lg: "18px",
      xs: "12px",
      mini: "15px",
      "sm-1": "13.1px",
      "lg-7": "18.7px",
      "xs-2": "11.2px",
      smi: "13px",
      "lg-9": "18.9px",
      "base-6": "15.6px",
      "base-1": "15.1px",
      "3xs": "10px",
      "sm-8": "13.8px",
      "sm-6": "13.6px",
      "8xs-5": "4.5px",
      "8xs-9": "4.9px",
      "6xs-6": "6.6px",
      "3xs-3": "9.3px",
      "4xs-9": "8.9px",
      "9xl": "28px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
