import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.{js,mjs,cjs,ts}"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parser: tsParser,
		},
		rules: {
			"no-console": ["error", { allow: ["warn", "error", "info"] }],
		},
	},
	pluginJs.configs.recommended,
	tseslint.configs.recommended,
];
