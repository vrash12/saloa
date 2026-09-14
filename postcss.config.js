import autoprefixer from "autoprefixer";
import { purgeCSSPlugin as purgecss } from "@fullhuman/postcss-purgecss";
export default {
  plugins: [
    autoprefixer(),
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss({
            content: ["./index.html", "./src/**/*.{ts,tsx}"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [
                "html",
                "body",
                "is-visible",
                "is-scrolled",
                "is-open",
                "is-active",
              ],
              greedy: [/^lucide/, /^step-/],
            },
          }),
        ]
      : []),
  ],
};
