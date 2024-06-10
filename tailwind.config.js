import colors from 'tailwindcss/colors';
import plugin from'tailwindcss/plugin';

export default {
    content: [
        './src/**/*.{js,html}'
    ],
    safelist: [],
    corePlugins: {
        preflight: false,
        backgroundOpacity: false,
        borderOpacity: false,
        borderSpacing: false,
        divideOpacity: false,
        placeholderOpacity: false,
        textOpacity: false,
        textDecoration: false,
    },
    theme: {
        screens: {
            sm: {'max': '655px'},
            xs: {'max': '424px'},
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.zinc,
                blue: colors.blue,
                amber: colors.amber,
            },
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
                serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
                mono: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
                inter: ['Inter', 'sans-serif']
            },
            fontSize: {
                xs: "12px",
                sm: "14px",
                base: "16px",
                lg: "18px",
                xl: "20px",
                "2xl": "24px",
                "3xl": "30px",
                "4xl": "36px",
                "5xl": "48px",
                "6xl": "60px",
                "7xl": "72px",
                "8xl": "96px",
                "9xl": "128px",
            },
            lineHeight: {
                none: "100%",
                tight: "125%",
                snug: "137.5%",
                normal: "150%",
                relaxed: "162.5%",
                loose: "200%",
                1: "4px",
                2: "8px",
                3: "12px",
                4: "16px",
                5: "20px",
                6: "24px",
                7: "28px",
                8: "32px",
                9: "36px",
                10: "40px",
            },
            spacing: {
                full: '100%',
                px: "1px",
                0: "0",
                0.5: "2px",
                1: "4px",
                1.5: "6px",
                2: "8px",
                2.5: "10px",
                3: "12px",
                3.5: "14px",
                4: "16px",
                4.5: "18px",
                5: "20px",
                5.5: "22px",
                6: "24px",
                6.5: "26px",
                7: "28px",
                7.5: "30px",
                8: "32px",
                8.5: "34px",
                9: "36px",
                9.5: "38px",
                10: "40px",
                11: "44px",
                12: "48px",
                14: "56px",
                16: "64px",
                20: "80px",
                24: "96px",
                28: "112px",
                32: "128px",
                36: "144px",
                40: "160px",
                44: "176px",
                48: "192px",
                52: "208px",
                56: "224px",
                60: "240px",
                64: "256px",
                72: "288px",
                80: "320px",
                96: "384px",
            },
            borderRadius: {
                none: "0px",
                sm: "2px",
                DEFAULT: "4px",
                md: "6px",
                lg: "8px",
                xl: "12px",
                "2xl": "16px",
                "3xl": "24px",
            },
            maxWidth: ({ theme }) => ({
                xs: "160px",
                sm: "192px",
                md: "224px",
                lg: "256px",
                xl: "288px",
                "2xl": "336px",
                "3xl": "768px",
                "4xl": "448px",
                "5xl": "512px",
                "6xl": "576px",
                "7xl": "640px",
            }),
        },
    },
    plugins: [
        // Border-spacing utilities
        plugin(function({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'border-spacing': (value) => ({
                        'border-spacing': value,
                    }),
                    'border-spacing-y': (value) => ({
                        'border-spacing': `0 ${value}`,
                    }),
                    'border-spacing-x': (value) => ({
                        'border-spacing': `${value} 0`,
                    }),
                },
                { values: theme('borderSpacing', ) }
            )
        }),
        // Text decoration utilities
        plugin(function({ addUtilities }) {
            addUtilities({
                '.underline': { 'text-decoration': 'underline' },
                '.overline': { 'text-decoration': 'overline' },
                '.line-through': { 'text-decoration': 'line-through' },
                '.no-underline': { 'text-decoration': 'none' },
            });
        }),
    ]
}