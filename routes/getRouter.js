const fs = require("fs");
const path = require("path");

const express = require("express");
const router = express.Router();

const getAverage = require("../util/getAverage");

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
  const reviews = JSON.parse(jsonData);

  let avgRating = getAverage(id, "korean");

  res.render(`restaurants/korean${id}`, {
    reviews: reviews,
    avgRating: avgRating,
  });
});
router.get("/chinese/:id", (req, res) => {
  const id = req.params.id;
  const chinesePath = path.join(__dirname, "..", "data", `chinese${id}.json`);

  // 파일 읽기
  const jsonData = fs.readFileSync(chinesePath);
  const reviews = JSON.parse(jsonData);

  let avgRating = getAverage(id, "chinese");

  res.render(`restaurants/chinese${id}`, {
    reviews: reviews,
    avgRating: avgRating,
  });
});
router.get("/western/:id", (req, res) => {
  const id = req.params.id;
  const westernPath = path.join(__dirname, "..", "data", `western${id}.json`);

  // 파일 읽기
  const jsonData = fs.readFileSync(westernPath);
  const reviews = JSON.parse(jsonData);

  let avgRating = getAverage(id, "western");

  res.render(`restaurants/western${id}`, {
    reviews: reviews,
    avgRating: avgRating,
  });
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
