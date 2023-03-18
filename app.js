const express = require("express");
const app = express();
//static & views 설정
const port = 8000;
app.set("view engine", "ejs");
app.set("/views", "views");

app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  const area = req.params.area;
  res.render("index");
});

app.get("/service_info", (req, res) => {
  res.render("service_info");
});

app.listen(port, () => {
  console.log(port + "is open!");
  console.log(`http://localhost:${port}`);
});
