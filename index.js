const express = require('express')
const app = require('express')()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Hello World");
   });

   app.listen(port, function () {
    console.log(`Example app listening on port !`);
   });