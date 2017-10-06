#!/usr/bin/env node
const program = require("commander");
const packageJson = require("./package.json");

program
  .version(packageJson.version)
  .option("start", "start the Web UI")
  .parse(process.argv);

if (program.start) {
  console.log("Server is starting...");
}
