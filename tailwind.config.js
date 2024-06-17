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
                'bg-form': '#FFFDF8',
            }
        },
    },
    plugins: [],
}

