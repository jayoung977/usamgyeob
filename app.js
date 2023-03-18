const express = require("express");
const app = express();
//static & views 설정
const port = 8000;
app.set("view engine", "ejs");
app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(port + "is open!");
  console.log(`http://localhost:${port}`);
});
