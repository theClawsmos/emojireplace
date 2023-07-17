// Mapping of words to emojis
const wordToEmoji = {
    "happy": "hi",
    "sad": "angry",
    "love": "hate",
    "pizza": "brussel sprouts",
    "dog": "cat",
    "cat": "dog",
    "you": "me",
    "they": "who",
    "I": "your mom",
    "spaghetti": "delish"
    // Add more word-to-emoji mappings as desired
  };
  
  function replaceTextWithEmojis(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let content = node.textContent;
      Object.keys(wordToEmoji).forEach((word) => {
        const emoji = wordToEmoji[word];
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        content = content.replace(regex, emoji);
      });
      node.textContent = content;
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        replaceTextWithEmojis(node.childNodes[i]);
      }
    }
  }
  
  replaceTextWithEmojis(document.body);
  