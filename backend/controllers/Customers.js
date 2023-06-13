const express = require('express');
const router = express.Router();
const logger = require('../utils/Logger');
const Customer = require('../models/Customers.js');
const { Exists } = require('../utils/db.utils');


const filename = 'PlaygroundsOwners.js';


/* DATABASE SCHEMA 

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- phone: String, Required
- username: String, Required
- password: String (hashed), Required
- email: String
- isVerified: Bool, default: false
- isDeleted: Bool, default: false

*/

/* API ENDPOINTS

- GET /api/v1/admin/customers - Get all customers
- GET /api/v1/admin/customers/:id - Get a customer by id
- POST /api/v1/admin/customers - Create a new customer
- PUT /api/v1/admin/customers/:id - Update a customer by id
- DELETE /api/v1/admin/customers/:id - Delete a customer by id
- DELETE /api/v1/admin/customers - Delete all customers

*/

/* @desc Get all customers */
const getAllCustomers = async(req, res) =>
{
    try
    {
        const customers = await Customer.find()
        logger.log(filename, 'Sending all customers ...');
        res.status(200).json({message: 'OK', data: {customers}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a customer by id */   
const getCustomerById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }
    
    try
    {
        const customer = await Customer.findById(id);
        if(!customer)
        {
            logger.log(filename, 'Not Found, customer not found.');
            return res.status(404).json({ error: 'Not Found, customer not found.' });
        }

        logger.log(filename, `Sending customer with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {customer}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new customer */
const createCustomer = async(req, res) =>
{
    const { name, phone, username, password, email } = req.body;

    try
    {
        if(!name || !phone || !username || !password)
        {
            logger.log(filename, 'Bad Request, please provide all required fields.');
            return res.status(400).json({ error: 'Bad Request, please provide all required fields.' });
        }

        if(await Exists(Customer, 'username', username))
        {
            logger.log(filename, 'Bad Request, username already exists.');
            return res.status(400).json({ error: 'Bad Request, username already exists.' });
        }

        const customer = new Customer({ name, phone, username, password, email });
        await customer.save();

        logger.log(filename, `Created a new customer with id ${customer._id} ...`);
        res.status(201).json({message: 'OK', data: {customer}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Update a customer by id */
const updateCustomer = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    const { name, phone, username, password, email } = req.body;
    try
    {
        const customer = Customer.findByIdAndUpdate(id, { name, phone, username, password, email });
        logger.log(filename, `Updated customer with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {customer}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete a customer by id */
const deleteCustomer = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    try
    {
        const customer = Customer.findByIdAndDelete(id);
        logger.log(filename, `Deleted customer with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {customer}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all customers */
const deleteAllCustomers = async(req, res) =>
{
    try
    {
        const customers = await Customer.deleteMany();
        logger.log(filename, `Deleted ${customers.deletedCount} customers ...`);
        res.status(200).json({message: 'OK', data: {customers}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
}


module.exports = {  getAllCustomers, 
                    getCustomerById, 
                    createCustomer, 
                    updateCustomer, 
                    deleteCustomer, 
                    deleteAllCustomers 
                };