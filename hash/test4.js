function solution(clothes) {
  const obj = clothes.reduce((acc, cur) => {
    if (acc[cur[1]]) {
      return { ...acc, [cur[1]]: [...acc[cur[1]], cur[0]] };
    } else {
      return { ...acc, [cur[1]]: [cur[0]] };
    }
  }, {});

  let result = 1;
  Object.values(obj).forEach((v) => {
    result *= v.length + 1;
  });

  return result - 1;
}
