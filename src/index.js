const express = require("express");

const app = express();

app.use("/", (req,res) =>
{
    res.send("<h1>hey whats'p negga server is running</h1>")
})

app.listen(7000, () =>
{
    console.log("server is running on port 7000")
})