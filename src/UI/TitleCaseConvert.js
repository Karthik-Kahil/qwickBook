function capitalizeEachWord(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

export default capitalizeEachWord;
