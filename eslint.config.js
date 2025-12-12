import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    {
        name: "app/files-to-lint",
        files: ["**/*.{js,mjs,jsx,vue}"],
    },

    {
        name: "app/ignores",
        ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
    },

    js.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    pluginPrettierRecommended,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
];