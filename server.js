const express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"))
// app.get('/ajax', (req,res) => {
//     res.render("ajax1");
// })

var port = process.env.PORT || 3000;
app.listen(port);