const { db } = require("../models");

exports.createReceipt = async (req, res) => {
  if (!req.body) {
    res.send.status(400).send({
      message: "these fields required",
      errors: error,
      status: 400,
    });
  }
  try {
    for (i = 0; i < req.body.itemsList.length; i++) {
      const receiptDetails = await db.receipt.create({
        itemName: req.body.itemsList[i].itemName,
        price: req.body.itemsList[i].price,
        amount: req.body.itemsList[i].amount,
      });
      res.status(200).send({
        status: 200,
        message: "receipt Save Successfully",
        data: receiptDetails,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: "Unable to insert data",
      errors: error,
      status: 400,
    });
  }
};
