const fs = require("fs");
const path = require("path");

const koreanPath = path.join(__dirname, "..", "data", "korean.json");
const chinesePath = path.join(__dirname, "..", "data", "chinese.json");
const westernPath = path.join(__dirname, "..", "data", "western.json");

const express = require("express");
const router = express.Router();

router.post("/korean/:id", function (req, res) {
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(koreanPath);
  const fileData = JSON.parse(jsonData);
  fileData.push(req.body);
  // 파일 쓰기
  fs.writeFileSync(koreanPath, JSON.stringify(fileData));

  res.redirect(`/korean/${id}`);
});
router.post("/chinese/:id", function (req, res) {
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(chinesePath);
  const fileData = JSON.parse(jsonData);

  // 파일 쓰기
  fs.writeFileSync(chinesePath, JSON.stringify(fileData));

  res.redirect(`/chinese/${id}`);
});
router.post("/western/:id", function (req, res) {
  const id = req.params.id;

  // 파일 읽기
  const jsonData = fs.readFileSync(westernPath);
  const fileData = JSON.parse(jsonData);

  // 파일 쓰기
  fs.writeFileSync(westernPath, JSON.stringify(fileData));

  res.redirect(`/western/${id}`);
});

module.exports = router;
