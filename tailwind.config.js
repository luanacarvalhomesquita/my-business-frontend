/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#fff9eb',
                    'light-hover': '#fff6e0',
                    'light-active': '#ffedbf',
                    normal: '#fec432',
                    'normal-hover': '#e5b02d',
                    'normal-active': '#cb9d28',
                    dark: '#bf9326',
                    'dark-hover': '#98761e',
                    'dark-active': '#725816',
                    darker: '#594512',
                },
                secondary: {
                    light: '#fef3eb',
                    'light-hover': '#feeee2',
                    'light-active': '#fddbc2',
                    normal: '#f78b3b',
                    'normal-hover': '#de7d35',
                    'normal-active': '#c66f2f',
                    dark: '#b9682c',
                    'dark-hover': '#945323',
                    'dark-active': '#6f3f1b',
                    darker: '#563115',
                },
                'form': '#FFFDF8',
                'black': '#2F2F2F',
            }
        },
    },
    plugins: [],
}

