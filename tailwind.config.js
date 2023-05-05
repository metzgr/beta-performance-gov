module.exports = {
    content: [
        './components/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './index.html',
      ], // Add any other paths necessary for your project
    darkMode: false,
    theme: {
      extend: {},
      fontFamily: {
        'sans': '-apple-system',
      }
    },
    variants: {
      extend: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
        borderColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
        textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
        // Add any other utilities you want to extend with all variants
      },
    },
    plugins: [
      require('@tailwindcss/forms', '@tailwindcss/aspect-ratio'),
    ],
  };
  