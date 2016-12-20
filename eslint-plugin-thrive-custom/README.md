# eslint-plugin-thrive-custom

A set of custom eslint rules for the thrive-marketing project

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-thrive-custom`:

```
$ npm install eslint-plugin-thrive-custom --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-thrive-custom` globally.

## Usage

Add `thrive-custom` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "thrive-custom"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "thrive-custom/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





