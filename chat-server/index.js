const express = require("express");
const app = express();
const prot = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("Chat applicatin server");
});

app.get("/data", async (req, res) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  res.send(await result.json());
});

app.listen(prot, () => {
  console.log("chat server is run http://localhost:3000");
});
