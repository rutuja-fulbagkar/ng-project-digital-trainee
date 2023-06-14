const express=require('express');
const app=express();
const port=3333;
const cors=require('cors');
const con=require('./db');
const { urlencoded } = require('body-parser');
con.connect((err) => {
    if (err) {
        console.log(err);

    } else {
        console.log("database connected")
    }
});



app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:4200" }));

app.use("/contact", require("./router/contact"));
app.use("/franchise", require("./router/franchise"));
app.use("/careerapplications",require("./router/careerapplications"));
app.use("/hirefromus",require("./router/hirefromus"));


app.listen(port, () => console.log("server start"));