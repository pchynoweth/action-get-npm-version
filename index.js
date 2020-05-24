const fs = require('fs');
const core = require('@actions/core');

try {
  const file = core.getInput('file') || 'package.json';
  console.log(`Using ${file}`);
  const version = JSON.parse(fs.readFileSync(file)).version;
  console.log(version);
  core.setOutput("version", version);
} catch (error) {
  core.setFailed(error.message);
}
