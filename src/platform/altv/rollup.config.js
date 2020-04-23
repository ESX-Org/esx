import path          from 'path';
import resolve       from '@rollup/plugin-node-resolve';
import commonjs      from '@rollup/plugin-commonjs';
import json          from '@rollup/plugin-json';
import {terser}      from 'rollup-plugin-terser'
import nodePolyfills from 'rollup-plugin-node-polyfills';
import copy          from 'rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

const RESOURCE_NAME = 'esx.altv';

export default[

  {

    input: path.join(__dirname, 'client/index.mjs'),
    
    output: {
      file: path.join(__dirname, '../../../dist/' + RESOURCE_NAME + '/src/client.bundle.mjs'),
      format: 'esm',
      sourcemap: true,
    },

    external: ['alt', 'natives'],

    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      nodePolyfills(),
      commonjs(),
      json(),
      production && terser(),
      copy({
        targets: [
          {
            src : path.join(__dirname, 'resource/**/*')                      .replace(/\\/g, '/'),
            dest: path.join(__dirname, '../../../dist/' + RESOURCE_NAME).replace(/\\/g, '/')
          }
        ],
      })
    ]
  },

  {

    input: path.join(__dirname, 'server/index.mjs'),
    
    output: {
      file: path.join(__dirname, '../../../dist/' + RESOURCE_NAME + '/src/server.bundle.mjs'),
      format: 'esm',
      sourcemap: true,
    },

    external: ['alt'],

    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      nodePolyfills(),
      commonjs(),
      json(),
      production && terser()
    ]

  }
];
