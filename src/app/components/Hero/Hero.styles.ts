// src/components/Hero.styles.ts
export const styles = {
  wrapper: () =>
    'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center px-6 md:px-12 text-center',
  container: () =>
    'max-w-4xl mx-auto flex flex-col items-center space-y-6',
  title: () =>
    'text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg',
  subtitle: () =>
    'text-lg md:text-2xl text-gray-300 font-medium',
  catchCopy: () =>
    'text-base md:text-lg max-w-xl text-gray-400 leading-relaxed',
  buttons: () =>
    'flex gap-4 mt-6 flex-wrap justify-center',
  primaryButton: () =>
    'bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-200',
  secondaryButton: () =>
    'border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition duration-200',
};
