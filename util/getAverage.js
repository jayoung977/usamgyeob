const fs = require("fs");
const path = require("path");

function getAverage(id, country) {
  let sum = 0;
  let avgRating = 0;

  const pathJson = path.join(__dirname, "..", "data", `${country}${id}.json`);

  // 파일 읽기
  const jsonData = fs.readFileSync(pathJson);
  const reviews = JSON.parse(jsonData);

  for (let review of reviews) {
    sum += +review.rating; // 문자열을 숫자로 타입 변환
  }

  if (reviews.length === 0) {
    avgRating = 0;
  } else {
    avgRating = sum / reviews.length;
    avgRating = avgRating.toFixed(1);
  }

  return avgRating;
}

module.exports = getAverage;
