let message = "Hello world";
let longestword = "";
message.split(" ").map((str) => {
  if (str.length > longestword.length) {
    longestword = str;
  }
});
console.log(longestword);
