module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eqeqeq": 2,
        "curly": 2,
        "block-scoped-var": 1,
        "consistent-return": 1,
        "dot-location": ["error", "property"],
        "dot-notation": 2,
        "no-alert": 2,
        "no-else-return": 1,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extra-bind": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 2,
        "no-lone-blocks": 1,
        "no-loop-func": 2,
        "no-magic-numbers": 1,
        "no-multi-spaces": 1,
        "no-new-wrappers": 1,
        "no-unused-expressions": 1,
        "no-unmodified-loop-condition": 1,
        // "no-undefined": 2,
        "no-use-before-define": 2,
        "indent": [1, "tab"],
        "no-unused-vars": 1
    }
};