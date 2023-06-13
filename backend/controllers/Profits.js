const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Playground = require('../models/Playgrounds');
const logger = require('../utils/Logger');
const Profits = require('../models/Profits');
const { Exists } = require('../utils/db.utils');


const filename = 'Profits.js';


/* DATABASE SCHEMA 

- id: Int, Auto Increment, Primary Key, Unique, Required
- playgroundId: Playgrounds, Required
- date: Date, Default: Date.now
- profit: Double, default: 0

*/

/* API ENDPOINTS
- GET /api/v1/admin/Profits - Get all Profits
- GET /api/v1/admin/Profits/:id - Get a floor type by id
- POST /api/v1/admin/Profits - Create a new floor type
- PATCH /api/v1/admin/Profits/:id - Update a floor type by id
- DELETE /api/v1/admin/Profits/:id - Delete a floor type by id
- DELETE /api/v1/admin/Profits - Delete all Profits
*/


const getAllProfits = async(req, res) =>
{
    try
    {
        const profits = await Profits.find()
        logger.log(filename, 'Sending all Profits ...');
        res.status(200).json({message: 'OK', data: {profits}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a customer by id */   
const getProfitById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }
    
    try
    {
        const profit = await Profits.findById(id);
        if(!profit)
        {
            logger.log(filename, 'Not Found, floor type not found.');
            return res.status(404).json({ error: 'Not Found, floor type not found.' });
        }

        logger.log(filename, `Sending floor type with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {profit}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new customer */
const createProfit = async(req, res) =>
{
    const { playgroundId, date, profit } = req.body;
    if(!playgroundId || !mongoose.isValidObjectId(playgroundId) || !Exists(Playgrounds, '_id', playgroundId)) 
    {
        logger.error(filename, 'Bad Request, please provide a valid playground ID.');
        return res.status(400).json({ error: 'Bad Request, please provide a valid playground ID.' });
    }

    try
    {
        const newProfit = new Profits({ playgroundId, date, profit });
        await newProfit.save();
        logger.log(filename, `Created new floor type with id ${newProfit.id} ...`);
        res.status(201).json({message: 'OK', data: {newProfit}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Update a floor type by id */
const updateProfit = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    const { playgroundId, date, profit } = req.body;
    if(playgroundId !== null && (!mongoose.isValidObjectId(playgroundId) || !Exists(Playgrounds, '_id', playgroundId)))
    {
        logger.error(filename, 'Bad Request, please provide a valid playground ID.');
        return res.status(400).json({ error: 'Bad Request, please provide a valid playground ID.' });
    }

    try
    {
        const profit = Profits.findByIdAndUpdate(id, { type, description });
        logger.log(filename, `Updated floor type with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {profit}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete a customer by id */
const deleteProfit = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    try
    {
        const profit = Profits.findByIdAndDelete(id);
        logger.log(filename, `Deleted floor type with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {profit}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all customers */
const deleteAllProfits = async(req, res) =>
{
    try
    {
        const profit = await Profits.deleteMany();
        logger.log(filename, `Deleted ${profit.deletedCount} customers ...`);
        res.status(200).json({message: 'OK', data: {profit}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
}


module.exports = {  getAllProfits,
                    getProfitById,
                    createProfit,
                    updateProfit,
                    deleteProfit,
                    deleteAllProfits
                };