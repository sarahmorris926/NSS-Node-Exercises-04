#!/usr/bin/env node

console.log(`Node Version: ${process.version} \nV8 Version: ${process.versions.v8}`);

// When on current version of node (~ nvm use node) output is:
// Node Version: v8.9.4
// V8 Version: 6.1.534.50

// When on v6 (~ nvm use v6) output is:
// Node Version: v6.13.0
// V8 Version: 5.1.281.111

// When on v4 (~ nvm use v4) output is:
// Node Version: v4.8.7
// V8 Version: 4.5.103.53

