import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "audits/**", "public/**"] },
  ...nextCoreWebVitals,
];

export default eslintConfig;
