import { defineConfig } from "orval";

export default defineConfig({
  bazaApi: {
    input: "shared/api/Schema.yaml",
    output: {
      target: "shared/api/__generated__/generated-api.ts",
      mode: "split",
      override: {
        mutator: {
          path: "shared/api/http/custom-instance.ts",
          name: "$api"
        }
      }
    }
  }
});
