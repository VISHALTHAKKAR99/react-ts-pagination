import { defineConfig } from "tsup";
export default {
  format:['cjs','esm'],
  entry:['./src/index.tsx'],
  dts:true,
  shims:true,
  skipNodeModulesBundle:true,
  clean:true,
};
