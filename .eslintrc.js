module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // Always end each statement with a semicolon.
        // If you don't use semicolons then there are a few cases where your code can behave unpredictably.
        // For more information see https://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript.
        // https://eslint.org/docs/rules/semi
        //
        // To fix error: add semicolon at the end of the statement triggering the error.
        "semi": [
            "error",
            "always"
        ],

        // Don't do assignments in an if condition, e.g. "if (myVariable = 1) {".
        // Doing assignments in an if condition usually indicates a mistake, i.e. the person writing it meant to use
        // triple equals: "if (myVariable === 1) {".
        // So using this rule can help prevent errors.
        // https://eslint.org/docs/rules/no-cond-assign
        //
        // To fix error: change = to ===
        "no-cond-assign": [
            "error",
            "always"
        ],

        // Don't declare variables and then never use them.
        // https://eslint.org/docs/rules/no-unused-vars
        //
        // To fix error: remove the unused variable
        "no-unused-vars": [
            "error"
        ],

        // Don't use the 'var' keyword. The keywords 'const' or 'let' should be used instead.
        // For more information on why you shouldnt' use 'var' see https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70.
        // https://eslint.org/docs/rules/no-var
        //
        // To fix error: change 'var' to 'let'
        "no-var": [
            "error"
        ],

        // Don't use double equals to check for equality. Instead use triple equals as that ensures that both the type
        // and the value of the variables are equal.
        // For more information see https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a.
        // https://eslint.org/docs/rules/eqeqeq
        //
        // To fix error: change == to ===
        "eqeqeq": [
            "error",
            "always"
        ],

        // If the value of a variable doesn't change, then use 'const' instead of 'let' when defining it.
        // This will make it more obvious to people reading the code that the value of the variable won't change.
        // https://eslint.org/docs/rules/prefer-const
        //
        // To fix error: change 'let' to 'const'
        "prefer-const": [
            "error"
        ]
    }
};