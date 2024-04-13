import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
    input:'src/App.tsx',
    output:{
        dir:'dist',
        format:'es',
        name:'react-ts-paginations'
    },
    external:["react","react-dom"],
    plugins:[typescript({tsconfig:"tsconfig.json"},

    postcss({
        extract: true, // Extract CSS to a separate file
        modules: true, // Enable CSS modules
        minimize: true // Minimize CSS
      })
)
]
})