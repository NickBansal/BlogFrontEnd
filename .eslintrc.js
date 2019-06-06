module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb",
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
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true
            }
        ]
    }
};