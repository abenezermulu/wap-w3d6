const express = require("express");
const path = require("path");
const app = express();

const date_ob = new Date();
const hour = date_ob.getHours();

if(hour > 6 && hour < 18){
    app.use('/css', express.static(path.join(__dirname, 'css', 'day.css')));
}else {
    app.use('/css', express.static(path.join(__dirname, 'css', 'night.css')));
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
  });
});

app.listen(3000);
