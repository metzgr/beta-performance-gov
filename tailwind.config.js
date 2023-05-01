module.exports = {
    content: ['./layouts/**/*.html', './src/**/*.js'], // Add any other paths necessary for your project
    darkMode: false,
    theme: {
      extend: {},
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
      require('@tailwindcss/forms'),
    ],
  };
  