function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" ");
  // console.log(words)
  const message = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  console.log(message);
}

capitalizeFirstLetter("hello abhishek");
