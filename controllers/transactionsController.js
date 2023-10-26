const express = require("express");
const transactionRouter = express.Router();
const transactionArray = require("../models/data");

transactionRouter.use(express.json());

// READ (INDEX)
transactionRouter.get("/", (req, res, next) => {
  try {
    if (transactionArray && transactionArray.length > 0) {
      res.status(200).send(transactionArray);
    } else {
      res.status(404).send({ message: "Transactions were not found" });
    }
  } catch (error) {
    next(error);
  }
});

// READ (SHOW)
transactionRouter.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const transaction = transactionArray.find(
      (item) => item.id === parseInt(id)
    );

    if (transaction) {
      res.status(200).send(transaction);
    } else {
      res.status(404).send({ message: "Could not find transaction" });
    }
  } catch (error) {
    next(error);
  }
});

// CREATE (CREATE)
transactionRouter.post("/", (req, res, next) => {
  try {
    const transactionBody = req.body;
    if (transactionBody) {
        const highestId = Math.max(...transactionArray.map(item => item.id));
        const newItemId = highestId + 1;
        transactionBody.id = newItemId;
  
        transactionArray.push(transactionBody);
      console.log("New Item Created:", transactionBody);
      res.status(201).send(transactionBody);
    } else {
      res.status(404).send({ message: "Transaction cannot be created" });
    }
  } catch (error) {
    next(error);
  }
});

// UPDATE (UPDATE)
transactionRouter.put("/:id", (req, res, next) => {
  try {
    const transactionId = parseInt(req.params.id);
    const transactionToUpdate = req.body;
    const transactionIndex = transactionArray.findIndex(
      (e) => e.id === transactionId
    );
    if (transactionIndex === -1) {
      res.status(404).send({ message: "Transaction not found" });
    }
    const currentTransaction = transactionArray[transactionIndex];

    for (let key in transactionToUpdate) {
      if (currentTransaction.hasOwnProperty([key])) {
        currentTransaction[key] = transactionToUpdate[key];
      }
    }

    transactionArray[transactionIndex] = currentTransaction;

    res.send(currentTransaction);
  } catch (error) {
    next(error);
  }
});

// DELETE (DELETE)
transactionRouter.delete("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const itemIndex = transactionArray.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).send({ message: "Item not found" });
    }

    const deletedItem = transactionArray.splice(itemIndex, 1);

    res.send(deletedItem[0]);
    console.log(deletedItem);
  } catch (error) {
    next(error);
  }
});

module.exports = transactionRouter;
