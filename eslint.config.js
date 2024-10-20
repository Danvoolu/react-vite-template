import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const obj = {
  b: 1,
  a: 2,
  c: 3,
};

export default tseslint.config(
  {
    ignores: ["dist"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
    },
  },
  // {
  //   extends: [perfectionist.configs["recommended-alphabetical"]],
  //   files: ["**/*.{ts,tsx,js}"],
  // },
  {
    extends: [unicorn.configs["flat/recommended"]],
    files: ["**/*.{ts,tsx,js}"],
    rules: {
      "unicorn/filename-case": ["off"],
    },
  },
  // {
  //   plugins: { unicorn },
  //   rules: {
  //     "unicorn/filename-case": ["error"],
  //   },
  // }
);

// export default [
//   perfectionist.configs["recommended-alphabetical"],
//   {
//     // plugins: {
//     //   perfectionist,
//     // },
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       parser: parser,
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//         ecmaVersion: 12,
//         sourceType: "module",
//       },
//     },
//     rules: {
//       "perfectionist/sort-objects": [
//         "error",
//         {
//           type: "alphabetical",
//         },
//       ],
//       "perfectionist/sort-interfaces": ["error"],
//     },
//     settings: {
//       perfectionist: {
//         partitionByComment: true,
//         type: "line-length",
//       },
//     },
//   },
// ];
