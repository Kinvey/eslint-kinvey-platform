module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "globals": {
    "assert": false,
    "expect": false,
    "should": false
  },
  "rules": {
    "accessor-pairs": "off",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": [
      "off",
      11
    ],
    "class-methods-use-this": "off",
    "consistent-return": "warn",
    "curly": [
      "error",
      "multi-line"
    ],
    "default-case": [
      "error",
      {
        "commentPattern": "^no default$"
      }
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eqeqeq": [
      "warn",
      "allow-null"
    ],
    "guard-for-in": "warn",
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "off",
    "no-else-return": "error",
    "no-empty-function": [
      "error",
      {
        "allow": [
          "arrowFunctions",
          "functions",
          "methods"
        ]
      }
    ],
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": [
      "error",
      {
        "exceptions": []
      }
    ],
    "no-native-reassign": "off",
    "no-implicit-coercion": [
      "off",
      {
        "boolean": false,
        "number": true,
        "string": true,
        "allow": []
      }
    ],
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "off",
      {
        "ignore": [],
        "ignoreArrayIndexes": true,
        "enforceConst": true,
        "detectObjects": false
      }
    ],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": [
      "error",
      {
        "object": "arguments",
        "property": "callee",
        "message": "arguments.callee is deprecated"
      },
      {
        "property": "__defineGetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "property": "__defineSetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "object": "Math",
        "property": "pow",
        "message": "Use the exponentiation operator (**) instead."
      }
    ],
    "no-return-assign": "warn",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "off",
    "no-unused-expressions": [
      "off",
      {
        "allowShortCircuit": false,
        "allowTernary": false
      }
    ],
    "no-unused-labels": "error",
    "no-useless-call": "off",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": [
      "off",
      {
        "terms": [
          "todo",
          "fixme",
          "xxx"
        ],
        "location": "start"
      }
    ],
    "no-with": "error",
    "radix": "off",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "outside",
      {
        "functionPrototypeMethods": false
      }
    ],
    "yoda": "error",
    "comma-dangle": [
      0,
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-console": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": [
      "off",
      "all",
      {
        "conditionalAssign": true,
        "nestedBinaryExpressions": false,
        "returnAssign": false
      }
    ],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-negated-in-lhs": "off",
    "use-isnan": "error",
    "valid-jsdoc": "off",
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "callback-return": "off",
    "global-require": "warn",
    "handle-callback-err": "off",
    "no-mixed-requires": [
      "off",
      false
    ],
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-restricted-modules": "off",
    "no-sync": "off",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-this": "off",
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "func-name-matching": [
      "off",
      "always",
      {
        "includeCommonJSModuleExports": false
      }
    ],
    "func-names": "warn",
    "func-style": [
      "warn",
      "declaration", {
        allowArrowFunctions: true
      }
    ],
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        }
      }
    ],
    "jsx-quotes": [
      "off",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "line-comment-position": [
      "off",
      {
        "position": "above",
        "ignorePattern": "",
        "applyDefaultPatterns": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "off",
    "lines-around-directive": [
      "error",
      {
        "before": "always",
        "after": "always"
      }
    ],
    "max-depth": [
      "off",
      4
    ],
    "max-len": [
      "warn",
      150,
      4
    ],
    "max-lines": [
      "off",
      {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-nested-callbacks": "off",
    "max-params": [
      "off",
      3
    ],
    "max-statements": [
      "off",
      10
    ],
    "max-statements-per-line": [
      "off",
      {
        "max": 1
      }
    ],
    "multiline-ternary": [
      "off",
      "never"
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List"
        ]
      }
    ],
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          [
            "+",
            "-",
            "*",
            "/",
            "%",
            "**"
          ],
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1
      }
    ],
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-spaced-func": "error",
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": [
      "off",
      {
        "allowAfterThis": false
      }
    ],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "off",
      {
        "ObjectExpression": {
          "minProperties": 0,
          "multiline": true
        },
        "ObjectPattern": {
          "minProperties": 0,
          "multiline": true
        }
      }
    ],
    "object-property-newline": [
      "error",
      {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    "operator-assignment": [
      "error",
      "always"
    ],
    "operator-linebreak": "off",
    "padded-blocks": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "as-needed",
      {
        "keywords": false,
        "unnecessary": true,
        "numbers": false
      }
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "require-jsdoc": "off",
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "sort-keys": [
      "off",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false,
        "overrides": {}
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!"
          ]
        },
        "block": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!"
          ],
          "balanced": false
        }
      }
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "wrap-regex": "off",
    "init-declarations": "off",
    "no-catch-shadow": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": [
      "warn",
      {
        "vars": "local",
        "args": "after-used"
      }
    ],
    "no-use-before-define": ["error", { "functions": false }],
    "arrow-body-style": [
      "warn",
      "as-needed"
    ],
    "arrow-parens": [
      "error",
      "as-needed",
      {
        "requireForBlockBody": true
      }
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "constructor-super": "error",
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ],
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        "ignoreConstructors": false,
        "avoidQuotes": true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-reflect": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "require-yield": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "sort-imports": [
      "off",
      {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": [
      "error",
      "after"
    ],
    "import/no-unresolved": [
      "off",
      {
        "commonjs": true,
        "caseSensitive": true
      }
    ],
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "spec/**",
          "test/**",
          "tests/**",
          "**/__tests__/**"
        ],
        "optionalDependencies": false
      }
    ],
    "import/no-mutable-exports": "error",
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    "import/first": [
      "error",
      "absolute-first"
    ],
    "import/imports-first": "off",
    "import/no-duplicates": "error",
    "import/no-namespace": "off",
    "import/extensions": [
      "error",
      "always",
      {
        "js": "never",
        "jsx": "never"
      }
    ],
    "import/order": [
      "off",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "never"
      }
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "error",
    "import/no-restricted-paths": "off",
    "import/max-dependencies": [
      "off",
      {
        "max": 10
      }
    ],
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": [
      "off",
      {
        "allow": []
      }
    ],
    "import/unambiguous": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-unassigned-import": "off",
    "import/no-named-default": "error",
    "strict": "error"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "globalReturn": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "import"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".json"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  }
};
