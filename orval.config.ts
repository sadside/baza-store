import { defineConfig } from "orval";

export default defineConfig({
  bazaApi: {
    input: "./source/shared/api/Schema.yaml",
    output: {
      target: "./source/shared/api/__generated__/generated-api.ts",
      mode: "split",
      override: {
        mutator: {
          path: "./source/shared/api/http/axios-instance.ts",
          name: "$apiWithGuard"
        }
      }
    }
  }
});
