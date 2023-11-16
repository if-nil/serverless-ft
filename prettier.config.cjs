module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  tailwindConfig: './tailwind.config.js',
  importOrder: ['^vue/(.*)$', '^[^@v](.*)$', '^@(.*)$', '^[./]'],
  importOrderSeparation: true,
  semi: true,
  singleQuote: true,
};
