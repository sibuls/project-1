


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


const express = require('express');

const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}) )


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    console.log('server bierze dane  +++++ ' + time);
    })

app.get("/index.html", function (req, res) {
     res.sendFile(__dirname + "/index.html")
     console.log('server bierze dane  +++++ ' + time);
     })
    

app.get("/bmiCalculator.html", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
    console.log('server bierze dane  z calca BMI ' + time);
     })




app.post("/", function (req, res) {

let num1 = Number(req.body.num1)
let num2 = Number(req.body.num2)
let result = num1 + num2;



res.send('fsfsfsfsfsf')
// res.send('<p>dodawanie  result </p>' + result);
// res.sendFile(__dirname + "/bmiCalculator.html")

console.log("------poczatek--------- ");
console.log('server wysyla  ==== ' + time);
console.log(Number(req.body.num1));
console.log(Number(req.body.num2));
console.log(result);
console.log("----------");


 })



app.post("/bmiCalculator.html", function (req,res) {


    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let result2 = weight * height;
    
    // res.sendFile(__dirname + "/bmiCalculator.html")
    res.send('bmi ' +  result2)

    console.log('server wysyla  BMI ==== ');
    console.log(Number(req.body.weight));
    console.log(Number(req.body.height));
    console.log(result2);
    console.log("-----koniec --------");

})


app.listen(3000, function () {
    console.log('Server listen 3000 ------ ' + time);
  })