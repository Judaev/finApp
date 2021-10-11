module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    '@react-native-community',
  ],
  plugins: ['json', '@typescript-eslint', 'react', 'react-hooks', 'prettier', 'babel'],
  rules: {
    // OFF RULES
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'no-unused-expressions': 'off',
    'compat/compat': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'lines-between-class-members': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'class-methods-use-this': 'off',
    'no-undef': 'off',
    'react/jsx-no-bind': 'off',

    // WARN RULES
    'import/no-cycle': 'warn',

    // ERROR RULES
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draftState'] }],
    'babel/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'react/state-in-constructor': ['error', 'never'],
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
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'max-lines': ['error', { max: 300, skipBlankLines: true }],
    '@typescript-eslint/lines-between-class-members': ['error'],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //     mjs: 'never',
    //     'd.ts': 'never',
    //   },
    // ],
  },
  env: {
    es6: true,
    browser: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      alias: true,
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: {
      version: 'detect',
    },
    polyfills: ['Promise', 'promises'],
  },
};
