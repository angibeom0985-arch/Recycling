const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',      // 모바일 (iPhone SE 등)
        'sm': '640px',      // 큰 모바일
        'md': '768px',      // 7인치 태블릿
        'lg': '1024px',     // 10인치 태블릿
        'xl': '1280px',     // 작은 노트북
        '2xl': '1536px',    // 대형 화면
        'tablet-7': '600px',   // 7인치 태블릿 (portrait)
        'tablet-10': '900px',  // 10인치 태블릿 (portrait)
        'landscape': { 'raw': '(orientation: landscape)' },
        'portrait': { 'raw': '(orientation: portrait)' },
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
};

export default config;
