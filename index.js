const emoji = require('node-emoji');

let emojis = [
  'coffee',
  'smiley',
  'pizza',
  'skull',
  'dog',
  'cat',
  'rose',
  'sunflower',
  'bird',
  'smirk_cat'
]

function logEmojis(emojiStrings) {
  emojiStrings.forEach(element => {
    console.log(emoji.get(element));
  });
}

logEmojis(emojis);