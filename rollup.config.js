// import { defineConfig } from "rollup";
// import typescript from "@rollup/plugin-typescript";
// import postcss from 'rollup-plugin-postcss';

// export default defineConfig({
//     input: 'src/index.tsx',
//     output: {
//         file: 'dist/bundle.js',
//         format: 'es',
//         name: 'react-ts-paginations'
//     },

//     external: ["react/jsx-runtime", "react-dom/client", "web-vitals"],

//     plugins: [typescript({ tsconfig: "tsconfig.json" },

//         postcss({
//             extract: true,
//             // modules: true,
//             minimize: true,
//             plugins:[
//                 require('tailwindcss'), 
//                 require('postcss-import'),
                
//             ]
//         })
//     )
//     ]
// })

import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/bundle.js',
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
                require('tailwindcss'),
                require('postcss-import')
            ]
        })
    ]
};
