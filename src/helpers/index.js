const removeDuplicateItemFromArray = (arr) => {
  if (!arr.length || arr.length === 0) {
    return [];
  }

  return arr.filter((item, index) => arr.indexOf(item) === index);
};

export default {
  removeDuplicateItemFromArray
}
