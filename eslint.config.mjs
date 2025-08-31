import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Global ignores
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'dist/**',
      'coverage/**',
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'no-console': 'warn', // Warn on console.log for cleaner production code
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ], // Ignore _ prefixes
    },
    languageOptions: {
      globals: {
        process: 'readonly', // For env vars in Firebase config
        fetch: 'readonly', // For Next.js API routes
      },
    },
  },
];
export default eslintConfig;
