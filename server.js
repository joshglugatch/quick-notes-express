var express = require("express");
var path = require("path");
var fs = require("fs");
var jsondb = require("./db/db.json");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
