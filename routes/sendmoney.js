var express = require('express');
var router = express.Router();
var db = require('../config/database');
var Customer = require('../Models/customers');
const { where } = require('sequelize');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('sendmoney');
});

router.post('/', async (req, res, next) => {
  try {
   const sender = req.body.sender;
   const receiver = req.body.receiver;
   const transferbal = req.body.amount;
    console.log(sender);
    console.log(receiver);
    console.log(transferbal);
    const host = await Customer.findOne({ where: { AccountNo: sender } });
    const funds = await Customer.findOne({ where: { AccountNo: receiver } });
    const UpdatedReceieverBalance = parseInt(funds.CurrentBal) + parseInt(transferbal);
    const UpdateSenderBalance = parseInt(host.CurrentBal) - parseInt(transferbal);
    console.log(UpdatedReceieverBalance);
    console.log(UpdateSenderBalance);
    await Customer.update({CurrentBal: UpdateSenderBalance},{where: {AccountNo: sender}});
    await Customer.update({CurrentBal: UpdatedReceieverBalance},{where: {AccountNo: receiver}});
    res.render("sendmoney" , {success:'Transaction Completed!!!' , check:'true'});

  } catch (error) {
    res.send(error);
    

  }
});

module.exports = router;
