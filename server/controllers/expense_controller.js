const { db } = require("../models");


const expenses = db.expense;
const expenseType = db.expenseType;
const Op = db.Sequelize.Op;

//create and save a new expend
exports.create = (req, res) => {
let vattype = req.body.VatType
var condition = vattype ? { vattype: { [Op.like]: `%${vattype}%` } } : null;
var option =expenseType.findOne({where:condition}).catch();
console.log(option);
  const expense = {
    businessId: req.body.businessId,
    date: req.body.date,
    name: req.body.name,
    expenseItems: req.body.expenseItems,
    expenseImg: req.body.expenseImg,
    expenseSum: req.body.expenseSum,
    currency: req.body.currency,
    VatType: req.body.VatType,
    VatRefund: option,
    IrsRefund: req.body.IrsRefund,
    refundSum: req.body.refundSum,
    confirmed: req.body.confirmed,
  };
  expenses.create(expense)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Invoice.",
    });
  });
};


exports.getexpenses = async (req, res) => {
    const businessId = req.params.businessId;
    var condition = businessId ? { businessId: { [Op.like]: `%${businessId}%` } } : null;
    expenses.findAll({where: condition}).then(data=>{res.send(data);}).catch(err=>{
      res.status(500).send({
        message:
        err.message || "some error occured while retrieving"
      });
    })
  };


exports.update = (req, res) => {
    const id = req.params.id;
    expenses.update(req.body, {
      where: { id: id }
    })  .then(num => {
      if (num == 1) {
        res.send({
          message: "expense was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update expense with id=${id}. Maybe expense was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating expense with id=" + id
      });
    });
};
  

exports.delete = (req, res) => {
  const id = req.params.id;
  expenses.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "expense was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete expense with id=${id}. Maybe expense was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete expense with id=" + id

      });
    });
};


//todo: check again
exports.find= (req, res) => {
  var name =req.body.name;
  const businessId = req.params.businessId;
  var condition2 = name ? { name: { [Op.ilike]: `%${name}%` } } : null;
  var condition = businessId ? { businessId: { [Op.like]: `%${businessId}%` } } : null;
  expenses.findAll({where: {[Op.and]:[{name:condition2},{businessId:condition}]}}).
  then(data=>{res.send(data);}).catch(err=>{
    res.status(500).send({
      message:
      err.message || "some error occured while retrieving"
    });
  })
};

exports.sum = (req,res)=> {
   expenses.sum('expenseSum').then(data=>{
     res.status(200).send({
       message: data
     });
    
    }).catch(err=>{
    res.status(500).send({
      message:
      err.message || "some error occured while retrieving"
    });
  });
}
