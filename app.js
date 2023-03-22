const express = require("express");

const getRouter = require("./routes/getRouter");
const postRouter = require("./routes/postRouter");

const app = express();
//static & views 설정
const port = 8000;

app.set("view engine", "ejs");
app.set("/views", "views");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: false}));

app.use("/", getRouter);
app.use("/", postRouter);

app.listen(port, () => {
  console.log(port + "is open!");
  console.log(`http://localhost:${port}`);
});
