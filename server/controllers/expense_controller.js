const { db } = require("../models");

const expenses = db.expense;
const Op = db.Sequelize.Op;

//create and save a new expend
exports.create = (req, res) => {
 const expense ={
   businessId:req.body.businessId,
   date:req.body.date,  
   type:req.body.type,
   expenseImg:req.body.expenseImg,
   expenseSum:req.body.expenseSum,
   currency: 0,
   vatRefund: 0,
   IrsRefund: 0 ,
   refundSum :0,
   confirm:false,
 };
 expenses.create(expense).then(data=>{res.send(data);
}).catch(err=>{res.status(500).send({
  message: err.message || "some error occurred while creating the expense."
})})
};


exports.getexpenses = async (req, res) => {
    const userId = req.query.buissnesId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}%` } } : null;
    expenses.findAll({where: condition}).then(data=>{res.send(data);}).catch(err=>{
      res.status(500).send({
        message:
        err.message || "some error occured while retrieving"
      });
    })
  };




// Find a single expend with an id
// exports.findOne = (req, res) => {
  
// };