const express = require('express');
const router = express.Router();

const { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer, deleteAllCustomers } = require('../controllers/Customers')

/* @desc Get all customers */
router.get('/', getAllCustomers)

/* @desc Get a customer by id */
router.get('/:id', getCustomerById)

/* @desc Create a new customer */
router.post('/', createCustomer)

/* @desc Update a customer by id */
router.patch('/:id', updateCustomer)

/* @desc Delete a customer by id */
router.delete('/:id', deleteCustomer)

/* @desc Delete all customers */
router.delete('/', deleteAllCustomers)



module.exports = router