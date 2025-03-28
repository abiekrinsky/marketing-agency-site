module.exports = {
  extends: 'next/core-web-vitals',
  ignorePatterns: ['node_modules/', '.next/', 'out/'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}; 