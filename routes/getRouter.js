const fs = require("fs");
const path = require("path");

const koreanPath = path.join(__dirname, ".." , "data", "korean.json");
const chinesePath = path.join(__dirname, "..", "data", "chinese.json");
const westernPath = path.join(__dirname, "..", "data", "western.json");

const express = require("express");
const router = express.Router();

// 메인
router.get("/", (req, res) => {
  res.render("index");  
 });
// 더미
router.get("/maze", (req, res)=> {
  res.render("dummy/maze");
})
// 용산구
router.get("/yongsan", (req, res)=>{
  res.render("yongsan");
});

router.get("/yongsan/third", function(req, res) {
  res.render("restaurants/third");
})

router.get("/korean/:id", (req, res)=>{
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(koreanPath);
  const restaurants = JSON.parse(jsonData);

  switch (id) {
    case "1":
      res.render("restaurants/korean1", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("restaurants/korean2", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("restaurants/korean3", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("restaurants/korean4", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
  }
});
router.get("/chinese/:id", (req, res)=>{
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(chinesePath);
  const fileData = JSON.parse(jsonData);

  switch (id) {
    case "1":
      res.render("restaurants/chinese1", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("restaurants/chinese2", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("restaurants/chinese3", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("restaurants/chinese4", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
  }
});
router.get("/western/:id", (req, res)=>{
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(westernPath);
  const fileData = JSON.parse(jsonData);

  switch (id) {
    case "1":
      res.render("restaurants/western1", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("restaurants/western2", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("restaurants/western3", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("restaurants/western4", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
  }});

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