const { db } = require("../models");

const expenses = db.expense;
const Op = db.Sequelize.Op;

//create and save a new expend
exports.create = (req, res) => {
 const expense ={
   businessId: req.businessId,
   date:req.body.date,  
   type:req.body.type,
   expenseImg:req.body.expenseImg,
   expenseSum:req.body.expenseSum,
   currency: 0,
   vatRefund: 0,
   IrsRefund: 0 ,
   refundSum :0,
   confirmed:false,
 };
 expenses.create(expense).then(data=>{res.send(data);
}).catch(err=>{res.status(500).send({
  message: err.message || "some error occurred while creating the expense."
})})
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
