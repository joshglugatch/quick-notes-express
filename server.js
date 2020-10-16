var express = require("express");
var path = require("path");
var fs = require("fs");
var jsondb = require("./db/db.json");
const { json } = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/db/db.json"))
});