module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-var': 'error'
        // 'no-console': 2 // Remember, this means error!
        // 'no-unused-vars': [
        //     'warn',
        //     { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
        // ]
    }
};
