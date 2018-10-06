let emoji = require('node-emoji');

let stdin = process.openStdin();

stdin.addListener("data", (d) => {
  console.log(emoji.emojify(d.toString().trim()));
});