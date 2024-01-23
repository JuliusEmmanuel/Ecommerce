// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // Your entry point
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'cjs' // CommonJS module format
  },
  plugins: [
    nodeResolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES modules
    babel({ // Transpile code
      babelHelpers: 'bundled',
      exclude: 'node_modules/**' // Exclude transpiling node_modules
    })
    // Add other plugins if needed
  ]
};
