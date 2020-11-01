// commanderモジュールをprogramとしてインポートする
const program = require("commander");
// コマンドライン引数をcommanderでパースする
const fs = require("fs");
const md2html = require("./md2html");
// const marked = require("marked");

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
}

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  const html = md2html(file, cliOptions);
  console.log(html);
});
