module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules", "src/"]
            }
        }
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-indent-props": 0,
        "prettier/prettier": [
            "error",
            {
                "useTabs": true,
                "tabWidth": 4,
                "singleQuote": true
            }
        ],
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true
            }
        ],
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    }
};