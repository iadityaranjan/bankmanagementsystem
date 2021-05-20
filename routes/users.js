const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Customer = require('../Models/customers')

/* GET users listing. */
router.get('/', (req, res) =>
  Customer.findAll()
    .then(customer => {
      res.render('accounts', {
        customer
      });
    })
    .catch(err => console.log(err)));

//Add a customer
router.get('/add', (req, res) => {
  const data = {
    Name: 'Mohit',
    Email: 'mk7@gmail.com',
    CurrentBal: '70000',
    AccountNo: 'A12405217658'
  }

  let { Name, Email, CurrentBal, AccountNo } = data;

  //Insert into table
  Customer.create({
    Name,
    Email,
    CurrentBal,
    AccountNo

  })
    .then(customer => res.redirect('/customer'))
    .catch(err => console.log(err));

});

module.exports = router;
