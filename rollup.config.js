import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
export default defineConfig({
    input: 'src/index.tsx',
    output: {
        file: 'dist',
        format: 'es',
        name: 'react-ts-paginations'
    },
    external: ["react", "react/jsx-runtime", "react-dom/client", "web-vitals"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        postcss({
            extract: true,
            minimize: true,
            plugins: [
                tailwindcss,
                require('tailwindcss'),
                require('postcss-import')
            ]
        })
    ]
});
