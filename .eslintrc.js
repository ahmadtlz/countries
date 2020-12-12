module.exports={
  env:{
    es6:true,
    jest:true,
    browser:true
  },
  parserOption:{
    ecmaVersion:2020,
    sourceType:module,
    ecmaFeatures:{
      jsx:true
    }
  },
  extends:[
    'react-app',
    'air-bnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins:['react-hooks','import','jsx-a11y'],
  settings:{
    'import/parser':{
      '@typescript-eslint/parser':['.ts','.tsx']
    },
    'import/resolver':{
      node:{
        extensions:['.js','.jsx','.ts','.tsx'],
      }
    }
  },
  rules:{
    'linebreak-style':0,
    'react/jsx-filename-extension':[
      'error',
      {
        extensions:['.tsx'],
      }
    ],
    'no-case-declarations':'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'class',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'switch',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'try',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'while',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: ['let', 'const'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },

};