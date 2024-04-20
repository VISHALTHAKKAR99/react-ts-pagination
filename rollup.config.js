import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import {terser} from 'rollup-plugin-terser';
import path from 'path';
export default defineConfig({
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        format: 'es',
    },
    external: ["react", "react/jsx-runtime", "react-dom/client", "web-vitals"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
        terser({
            compress:{
                module:true,
                unsafe_arrows:true,
                drop_console:true,
                drop_debugger:true
            },
            output:{quote_style:1}
        }),
        postcss({
            extract: true,
            modules: true,
            use: ["sass"],
            config: {
                path: './postcss.config.js',
              },
            include: [
              path.resolve(__dirname, "src/**/*.scss"),
              path.resolve(__dirname, "src/**/*.css"),
            ],
            exclude: "node_modules/**",
            sourceMap: true,
            plugins: [tailwindcss('./tailwind.config.js')],
          }),
    ]
});
