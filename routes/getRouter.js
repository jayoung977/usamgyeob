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
  res.render("maze");
})
// 용산구
router.get("/yongsan", (req, res)=>{
  res.render("yongsan");
});

router.get("/korean/:id", (req, res)=>{
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(koreanPath);
  const restaurants = JSON.parse(jsonData);

  switch (id) {
    case "1":
      res.render("korean1", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("korean2", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("korean3", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("korean4", {
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
      res.render("chinese1", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("chinese2", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("chinese3", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("chinese4", {
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
      res.render("western1", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "2":
      res.render("western2", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "3":
      res.render("western3", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
    case "4":
      res.render("western4", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
      });
      break;
  }});



module.exports = router;