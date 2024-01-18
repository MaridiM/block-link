module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'import',
        'i18next',
        'prettier',
        'unused-imports'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:i18next/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        // General rules
        eqeqeq: 'warn',
        'no-var': 'error',
        'no-eval': 'error',
        'prefer-const': 'warn',
        'no-undef-init': 'warn',
        'no-duplicate-imports': 'warn',
        'no-dupe-args': 'off',
        'no-empty-pattern': 'warn',
        
        // TypeScript rules
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-redundant-type-constituents': 'off',

        // Additional rules
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],

        // Import rules
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '**/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                alphabetize: { order: 'asc' },
            },
        ],
        'i18next/no-literal-string': 2,
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
