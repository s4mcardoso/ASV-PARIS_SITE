/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Certifique-se de que está apontando para todos os arquivos JSX
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adicione esta linha
      },
    },
  },
  plugins: [],
}
