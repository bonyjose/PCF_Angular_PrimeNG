const concat = require('concat');
(async function build() {
    const files = ['./dist/PCFAngularElement/runtime-es5.js',
'./dist/PCFAngularElement/polyfills-es5.js',
// './dist/primeng-quickstart-cli/scripts.js',
'./dist/PCFAngularElement/main-es5.js'];
await concat(files, './dist/PCFAngularElement/bundle.js');
await concat(files, './plainHTML/bundle.js');})();