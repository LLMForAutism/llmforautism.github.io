import path from "node:path";

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(" --file ")}`;

export default {
	"*.{js,jsx,mjs,cjs,ts,tsx}": [buildEslintCommand, "prettier --write"],
	"*.{json,md,mdx,css,html,yml,yaml}": ["prettier --write"],
};
