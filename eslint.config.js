import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'path'

const compat = new FlatCompat({
  baseDirectory: path.resolve('.'),
  recommendedConfig: js.configs.recommended,
})

export default [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { parser: '@babel/eslint-parser', requireConfigFile: false },
    settings: { react: { version: 'detect' } },
    globals: { process: true, document: true, window: true, global: true },
    env: { browser: true, node: true },
    rules: {
      'import/no-cycle': ['warn', { maxDepth: '∞' }],
      'import/no-unresolved': 'off',
      'import/export': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variableLike', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        {
          selector: 'memberLike',
          format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
          filter: { regex: '/.*|@.*|[a-z|-|~|@].*', match: false },
        },
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      'no-self-assign': 'off',
      'no-constant-condition': 'off',
      'no-unused-vars': 'warn',
      curly: ['error', 'multi', 'consistent'],
      'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info', 'groupCollapsed', 'groupEnd'] }],
    },
    ignorePatterns: ['**/*.js', '**/*.test.ts'],
  }),
]
