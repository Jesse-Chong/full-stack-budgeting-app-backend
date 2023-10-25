const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController");

app.use(cors({ origin: "http://localhost:2222" }));

console.log("app test");

app.use(express.json());

app.use("/transactions", transactionsController);
app.use("/transactions/:id", transactionsController);

app.use("*", (req, res) => {
  res.status(404).json({ error: "WELCOME TO NUMBER HELL!!!👻" });
});

module.exports = app;
