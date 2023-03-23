const fs = require("fs");
const path = require("path");

const express = require("express");
const router = express.Router();

// 메인
router.get("/", (req, res) => {
  res.render("index");  
 });
// 더미
router.get("/maze", (req, res) => {
  res.render("dummy/maze");
});
// 용산구
router.get("/yongsan", (req, res) => {
  res.render("yongsan");
});

router.get("/korean/:id", (req, res) => {
  const id = req.params.id;
  const koreanPath = path.join(__dirname, "..", "data", `korean${id}.json`);

  // 파일 읽기
  const jsonData = fs.readFileSync(koreanPath);
  const restaurants = JSON.parse(jsonData);

  let sum = 0;
  let avgRating = 0;

  for (let restaurant of restaurants) {
    sum += +restaurant.rating; // 문자열을 숫자로 타입 변환
  }
  if (restaurants.length === 0) {
    avgRating = 0;
  } else {
    avgRating = sum / restaurants.length;
  }

  switch (id) {
    case "1":
      res.render("restaurants/korean1", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
    case "2":
      res.render("restaurants/korean2", {
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("restaurants/korean3", {
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("restaurants/korean4", {
        restaurants: restaurants,
      });
      break;
  }
});
router.get("/chinese/:id", (req, res) => {
  const id = req.params.id;
  const chinesePath = path.join(__dirname, "..", "data", `chinese${id}.json`);

  // 파일 읽기
  const jsonData = fs.readFileSync(chinesePath);
  const restaurants = JSON.parse(jsonData);

  let sum = 0;
  let avgRating = 0;

  for (let restaurant of restaurants) {
    sum += +restaurant.rating; // 문자열을 숫자로 타입 변환
  }
  if (restaurants.length === 0) {
    avgRating = 0;
  } else {
    avgRating = sum / restaurants.length;
  }

  switch (id) {
    case "1":
      res.render("restaurants/chinese1", {
        avgRating: avgRating,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("restaurants/chinese2", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
    case "3":
      res.render("restaurants/chinese3", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
    case "4":
      res.render("restaurants/chinese4", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
  }
});
router.get("/western/:id", (req, res) => {
  const id = req.params.id;
  const westernPath = path.join(__dirname, "..", "data", `western${id}.json`);

  // 파일 읽기
  const jsonData = fs.readFileSync(westernPath);
  const restaurants = JSON.parse(jsonData);

  let sum = 0;
  let avgRating = 0;

  for (let restaurant of restaurants) {
    sum += +restaurant.rating; // 문자열을 숫자로 타입 변환
  }
  if (restaurants.length === 0) {
    avgRating = 0;
  } else {
    avgRating = sum / restaurants.length;
  }

  switch (id) {
    case "1":
      res.render("restaurants/western1", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
    case "2":
      res.render("restaurants/western2", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
    case "3":
      res.render("restaurants/western3", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
    case "4":
      res.render("restaurants/western4", {
        restaurants: restaurants,
        avgRating: avgRating,
      });
      break;
  }
});

router.get("/service_info", (req, res) => {
  res.render("info/service_info");
});
router.get("/faq", (req, res) => {
  res.render("info/faq");
});
router.get("/customer_service", (req, res) => {
  res.render("info/customer_service");
});
router.get("/customer_service/suggestion", (req, res) => {
  res.render("info/suggestion");
});
router.get("/customer_service/inquiry", (req, res) => {
  res.render("info/inquiry");
});

module.exports = router;
