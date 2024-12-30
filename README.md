#### Crate package.json file
npm init -y

#### Added TypeScript 
npm install typescript @types/node --save-dev

#### Generate tsconfig file
npx tsc --init

#### Generate eslint file
npx eslint --init

npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
    eslint: ESLint core library
    @typescript-eslint/parser: A parser that allows ESLint to understand TypeScript code
    @typescript-eslint/eslint-plugin: Plugin with a set of recommended TypeScript rules

#### Added Prettier
npm install --save-dev prettier

manually create .prettierrc and add your desired configuration options
manually create .prettierignore 

#### plugin to disable all ESLint rules that are irrelevant to code formatting, as Prettier is already good at it
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

#### Added Nodemon for Auto-Restart
npm install nodemon --save-dev

####  skip the compilation step and directly run the TypeScript file 
npm install ts-node --save-dev


#### Added running command to Script tag in package.json file

"build": "tsc",
"start": "node dist/index.js",
"dev": "nodemon --watch src --exec ts-node src/index.ts",
"lint": "eslint .",
"lint-fix": "npm run lint -- --fix",
"format": "prettier --write \"src/**/*.{js,ts,json,css,md}\""

#### Set Up Husky
npx husky-init && npm install

#### Create the .husky/pre-commit file (it should already exist after running npx husky-init):
touch .husky/pre-commit

#### Update .husky/pre-commit
#!/bin/sh \
. "$(dirname "$0")/_/husky.sh" \
npx lint-staged

#### Update package.json file with lint-stage command 
"lint-staged": {\
  "*.{ts,js}": [
    "eslint --fix",
    "prettier --write"
  ],\
  "*.json": [
    "prettier --write"
  ]\
}

### summary

* ESLint: Lints and fixes TypeScript and JavaScript files.\
* Prettier: Formats the code according to your Prettier configuration.\
* Lint-Staged: Ensures only staged files are linted and formatted before commit.\
* Husky: Runs the linting and formatting tasks automatically on the pre-commit hook to prevent committing code that doesn’t follow your standards.

