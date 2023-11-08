const path = require('path');

const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');

process.argv.length = 1;
process.argv.push(nextPath, 'start', '--hostname=127.0.0.1');
require(nextPath);
