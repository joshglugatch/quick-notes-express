
# Quick Notes Express 
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
<br>
Created an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
  
<br>

![exampleGif](quicknotesexpressdemo.gif)

<br>

## Built With
* JavaScript
* HTML
* CSS
* Express
* Node.js

## Installation
Run in terminal:
``` npm install ```


## Code Example
First the required variables were grabbed along with creating our server and middleware handlers:
``` javaScript
var express = require("express");
var path = require("path");
var fs = require("fs");
var jsondb = require("./db/db.json");
const { v4: uuidv4 } = require('uuid');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
```
<br>
New notes are given an ID using the unique ID npm and posted to a json file.

``` javaScript
app.post("/api/notes", function(req,res){
    var newNote = req.body;
    let noteID = uuidv4()
    newNote.id = noteID;
    jsondb.push(newNote)
    
    fs.writeFile("./db/db.json", JSON.stringify(jsondb), function(err){
        if (err) throw err;
        res.json("Response")
    })
    
});
```
<br>
In order to delete note ID must be matched with the ID being deleted, and splice() removes the note. Then our json file is rewritten without the deleted note.

```JavaScript
app.delete("/api/notes/:id", function(req, res) {
    var collectID = req.params.id

    for (i=0; i < jsondb.length; i++){
        if(jsondb[i].id === collectID){
            jsondb.splice(i,1);
        }
    }

    fs.writeFile("./db/db.json", JSON.stringify(jsondb), function(err){
        if (err) throw err;
        res.json("Response")
    })
});
```

### Deployed Link
https://quicknotesexpress.herokuapp.com/notes

### GitHub Repository
https://github.com/joshglugatch/quick-notes-express

### Questions:
If you have any questions contact me on [GitHub.](https://github.com/joshglugatch) 

<br>

[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/joshglugatch)
<br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/joshua-glugatch)