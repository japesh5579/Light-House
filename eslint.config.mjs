import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Third-party Tilda vendor scripts copied verbatim into public/ —
    // not our code, not meant to be linted or modified.
    "public/**",
  ]),
  {
    // TildaHead.tsx faithfully reproduces the original page's exact
    // script loading order/behavior (some scripts are intentionally
    // synchronous, some stylesheets are linked directly) — these rules
    // would push us to "fix" things that must stay byte-for-byte
    // identical to the source page.
    files: ["src/components/TildaHead.tsx"],
    rules: {
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-css-tags": "off",
    },
  },
]);

export default eslintConfig;
