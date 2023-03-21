const express = require('express');
const app = express();
//static & views 설정
const port = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  const area = req.params.area;
  res.render('index');
});

app.get('/yongsan', (req, res) => {
  res.render('yongsan');
});

app.get('/service_info', (req, res) => {
  res.render('service_info');
});
app.get('/faq', (req, res) => {
  res.render('faq');
});
app.get('/customer_service', (req, res) => {
  res.render('customer_service');
});
app.get('/customer_service/suggestion', (req, res) => {
  res.render('suggestion');
});
app.get('/customer_service/inquiry', (req, res) => {
  res.render('inquiry');
});

app.get("/third", (req, res) => {
  res.render("third");
});

app.listen(port, () => {
  console.log(port + 'is open!');
  console.log(`http://localhost:${port}`);
});
