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
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": ["node_modules", "src/"]
            }
        }
    },
    "rules": {
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true
            }
        ],
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
        "indent": ["error", 2],
        "jsx-a11y/label-has-associated-control": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        "jsx-a11y/label-has-for": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }]
    }
};