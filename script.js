const fs = require("fs-extra");
const { promisify } = require("util");

async function init() {
  await promisify(fs.remove)("./docs");
  await promisify(fs.move)("./build", "./docs");
}

init();
