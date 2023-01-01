/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/bgcirc.png')",
                'light-hero-pattern': "url('/bgcirc2.png')",
            },
            container: {
                center: true,
                padding: {
                    '2xl': '2rem',
                    DEFAULT: '1rem',
                    sm: '1rem',
                    lg: '2rem',
                    xl: '0rem',
                },
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            fontFamily: {
                primary: ['DM Sans', 'sans-serif'],
            },
            colors: {
                primary: '#F15F0D',
                secondary: '#000000',
                para: '#5F6575',
            },
            boxShadow: {
                form: '0px 0px 30px rgba(0, 0, 0, 0.1);',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
    important: true,
};
