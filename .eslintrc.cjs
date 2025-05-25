module.exports = {
  root: true,
  env: { browser: true, es2020: true,node:true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
 
    
      {
        files: ['Computers.jsx'], // Target the specific file
        rules: {
          // 'react/jsx-no-undef': 'off',
          // Disable the rule that causes unknown property warnings
          // Add any other rule adjustments specific to the Computers.jsx file
          'react/prop-types': 'off',
          'react/no-unknown-property': [
            2,
            {
              ignore: 'jsx'
            },
          ],
        },
    },
  ],
}
