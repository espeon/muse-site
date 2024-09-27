// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var { docs, meta } = defineDocs();
var source_config_default = defineConfig({
  lastModifiedTime: "git"
});
export {
  source_config_default as default,
  docs,
  meta
};
