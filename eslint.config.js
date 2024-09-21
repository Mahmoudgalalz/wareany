import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'coverage',
      'public',
      'dist',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
    ],
  },
  eslintPluginPrettier,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
