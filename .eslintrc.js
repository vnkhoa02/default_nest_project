module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Enforce PascalCase for interface names with custom regex to start with 'I'
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    // Require explicit return types on functions
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    // Disallow the use of the "any" type
    '@typescript-eslint/no-explicit-any': 'error',
    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': 'error',
    // Disallow non-null assertions using the non-null assertion operator
    '@typescript-eslint/no-non-null-assertion': 'error',
    // Disallow unsafe assignment operations (e.g., any to any)
    '@typescript-eslint/no-unsafe-assignment': 'error',
    // Disallow unsafe member access (e.g., any to any)
    '@typescript-eslint/no-unsafe-member-access': 'error',
    // Disallow unsafe function calls (e.g., any to any)
    '@typescript-eslint/no-unsafe-call': 'error',
    // Disallow unsafe return statements (e.g., any to any)
    '@typescript-eslint/no-unsafe-return': 'error',
    // Disallow the use of require statements
    '@typescript-eslint/no-var-requires': 'error',
    // Disallow unused expressions
    'no-unused-vars': ['error', { vars: 'all' }],
  },
};
