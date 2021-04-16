const fs = require('fs-extra');

function copySchema() {
  fs.copySync('./skyuxconfig-schema.json', './dist/skyuxconfig-schema.json');
}

copySchema();
