function solution(genres, plays) {
  const counts = {};
  const obj = {};
  const result = [];
  for (let i = 0; i < genres.length; i++) {
    counts[genres[i]] = counts[genres[i]]
      ? counts[genres[i]] + plays[i]
      : plays[i];
    obj[genres[i]] = obj[genres[i]]
      ? [...obj[genres[i]], [i, plays[i]]]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2)
      : [[i, plays[i]]];
  }

  const sortedGenres = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  sortedGenres.forEach((g) => {
    const genre = g[0];
    result.push(obj[genre].map((i) => i[0]));
  });
  return result.flat();
}
