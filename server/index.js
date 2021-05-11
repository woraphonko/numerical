const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mySql = require("mysql");

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// server listenning    //การเปิด rocal host 
app.listen(7777, function() {
  console.log("server start is port: 7777");
});

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "0627785757ko",
  database: "getnumerdata",
  multipleStatements: true,
});

//connect to database   //บอกว่า error ที่อะไร
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DataBase Connected");
  }
});

//เรียกข้อมูลทั้งหมดใน tabledata มาโชว์
app.get("/get", (req, res) => {
  connection.query("SELECT * FROM tabledata", (error, results) => {   //บอกว่า เลือกข้อมูลทั้งหมดจากฟอร์มนิวเมอร์(tabledata)
    if (error) throw error;
    res.send(results);
  });
});

//เก็บข้อมูลในฐานข้อมูล  tabledata
app.post("/post", (req, res) => {
  const numerdata = req.body;
  let command = "INSERT INTO tabledata SET ?";
  connection.query(command, numerdata, (error, results) => {
    if (!error) {
      console.log(numerdata);
      res.send(numerdata);
    } else {
      console.log(error);
      throw error;
    }
  });
});

//การเก็บข้อมูล โดยการนำข้อมูลมาจากหน้าเว็บ ไปไว้ใน database
app.post("/post/service/inputnumer2", (req, res) => {
  const Eq = req.body.Eq;
  const XL = req.body.XL;
  const XR = req.body.XR;
  const email = req.body.email;

  let command = "INSERT INTO numer SET ?";
  connection.query(command, Eq, XL, XR, email, (error, results) => {
    if (!error) {
      console.log(results);
      res.send(results);
    } else {
      console.log(error);
      throw error;
    }
  });
});

//การเรียกข้อมูลที่เก็บมา
app.get("/last", (req, res) => {
  connection.query(
    "SELECT * FROM tabledata ORDER BY id_data DESC LIMIT 1",
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
});
