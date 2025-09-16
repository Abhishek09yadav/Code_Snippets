function isIsogram(str) {
  if (str == "") {
    return true;
  }
  const lowerCaseStr = str.toLowerCase();
  const unique = new Set(lowerCaseStr);

  return lowerCaseStr.length === unique.size;
}
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moOse"))
