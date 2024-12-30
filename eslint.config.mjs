import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,cjs,ts}"] },
    { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPrettierRecommended,
    {
        ignores: ["node_modules", "dist"],
    },
    {
        rules: {
          "prettier/prettier": "error",
          "@typescript-eslint/no-unused-vars": ["error"]
        },
    },
];
