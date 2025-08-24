import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unescaped entities rule to allow quotes in JSX
      "react/no-unescaped-entities": "off",
      // Warn on unused variables instead of error
      "@typescript-eslint/no-unused-vars": "warn",
      // Disable img element warnings since we use Next.js Image
      "@next/next/no-img-element": "off"
    },
  },
];

export default eslintConfig;
