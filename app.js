const express = require("express");
const app = express();
//static & views 설정
const port = 8000;
app.set("view engine", "ejs");
app.set("/views", "views");

app.use("/static", express.static(__dirname + "/static"));

// 메인
app.get("/", (req, res) => {
  res.render("index");  
 });

// 더미
app.get("/dummy", (req, res)=> {
  res.render("dummy");
})

// 서대문구 ~ 강남구
app.get("/seodaemun", (req, res)=>{
  res.render("seodaemun");
});
app.get("/yongsan", (req, res)=>{
  res.render("yongsan");
});
app.get("/gwanak", (req, res)=>{
  res.render("gwanak");
});
app.get("/dongjak", (req, res)=>{
  res.render("dongjak");
});
app.get("/seocho", (req, res)=>{
  res.render("seocho");
});
app.get("/gangnam", (req, res)=>{
  res.render("gangnam");
});

app.listen(port, () => {
  console.log(port + "is open!");
  console.log(`http://localhost:${port}`);
});
