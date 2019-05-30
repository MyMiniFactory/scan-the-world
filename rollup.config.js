import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import images from 'rollup-plugin-image-files'
import autoExternal from 'rollup-plugin-auto-external'
import scss from 'rollup-plugin-scss'

import pkg from './package.json'

export default {
    input: 'src/lib.js',
    plugins: [
        autoExternal(),
        resolve(),

        scss(),
        images(),

        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: [
        {
            file: pkg.module,
            format: 'es'
        },
    ]
};