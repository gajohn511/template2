module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-var': 'error',
        'no-unused-vars': [
            'warn',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
        ]
    }
};
