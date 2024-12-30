## Crate package.json file
npm init -y

## Added TypeScript 
npm install typescript @types/node --save-dev

## Generate tsconfig file
npx tsc --init

## Generate eslint file
npx eslint --init

npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
    eslint: ESLint core library
    @typescript-eslint/parser: A parser that allows ESLint to understand TypeScript code
    @typescript-eslint/eslint-plugin: Plugin with a set of recommended TypeScript rules

## Added Prettier
npm install --save-dev prettier

manually create .prettierrc and add your desired configuration options
manually create .prettierignore 

## plugin to disable all ESLint rules that are irrelevant to code formatting, as Prettier is already good at it
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

## Added Nodemon for Auto-Restart
npm install nodemon --save-dev

##  skip the compilation step and directly run the TypeScript file 
npm install ts-node --save-dev


## Added running command to Script tag in package.json file

"build": "tsc",
"start": "node dist/index.js",
"dev": "nodemon --watch src --exec ts-node src/index.ts",
"lint": "eslint .",
"lint-fix": "npm run lint -- --fix",
"format": "prettier --write \"src/**/*.{js,ts,json,css,md}\""