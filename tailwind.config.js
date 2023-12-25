/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        // Aquí puedes agregar tus colores personalizados
        primary: '#F5AC1A', // Por ejemplo, un color llamado "primary"
        secondary: '#04143C', // Otro color llamado "secondary"
        customColor: '#d6a700', // Un color personalizado
      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai Looped', 'sans-serif'],
        serif: ['Fredoka', 'sans-serif'],
      },
      screens: {
        xsm: "500px",
              },      
            },
  },
  plugins: [],
}

