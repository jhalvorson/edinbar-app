const execSync = require('child_process').execSync;

const component = process.argv.slice(3).length ? `**/${process.argv.slice(3)}/**/` : '**/';

execSync(`mocha --require test-config/index.js --compilers js:babel-core/register "app/${component}*.test.js"`, { stdio: 'inherit' });
