import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      ".vercel/**",
      "next-env.d.ts",
      "production-rest-api-principles/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
export default config;
