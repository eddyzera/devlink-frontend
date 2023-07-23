/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': 'var(--purple-900)',
        'middle-purple': 'var(--purple-200)',
        'light-purple': 'var(--purple-100)',
        'dark-gray': 'var(--gray-900)',
        'middle-gray': 'var(--gray-800)',
        'light-gray': 'var(--gray-500)',
        gray: 'var(--gray-100)',
        white: 'var(--white)',
        'dark-red': 'var(--red-900)',
      },
      borderRadius: {
        'radius-md': 'var(--radius-md)',
      },
      boxShadow: {
        'shadow-md': 'var(--shadow-md)',
      },
      fontSize: {
        'text-12': 'var(--text-sm)',
        'text-16': 'var(--text-md)',
        'text-32': 'var(--text-lg)',
      },
      lineHeight: {
        'line-md': 'var(--line-height)',
      },
    },
  },
  plugins: [],
}
