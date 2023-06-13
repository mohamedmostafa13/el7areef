const express = require('express');
const router = express.Router();
const logger = require('../utils/Logger');
const Utilities = require('../models/Utilities');
const { Exists } = require('../utils/db.utils');


const filename = 'Utilities.js';


/* DATABASE SCHEMA 

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- description: String
- type: String, Required

*/

/* API ENDPOINTS
- GET /api/v1/admin/utilities - Get all utilities
- GET /api/v1/admin/utilities/:id - Get a utility by id
- POST /api/v1/admin/utilities - Create a new utility
- PUT /api/v1/admin/utilities/:id - Update a utility by id
- DELETE /api/v1/admin/utilities/:id - Delete a utility by id
- DELETE /api/v1/admin/utilities - Delete all utilities
*/


/* @desc Get all utilities */
const getAllUtilities = async(req, res) =>
{
    try
    {
        const utilities = await Utilities.find()
        logger.log(filename, 'Sending all Utilities ...');
        res.status(200).json({message: 'OK', data: {utilities}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a utility by id */
const getUtilityById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }
    
    try
    {
        const utility = await Utilities.findById(id);
        if(!utility)
        {
            logger.log(filename, 'Not Found, utility not found.');
            return res.status(404).json({ error: 'Not Found, utility not found.' });
        }

        logger.log(filename, `Sending utility with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {utility}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new utility */
const createUtility = async(req, res) =>
{
    const { name, description, type } = req.body;
    if(!name || !type)
    {
        logger.error(filename, 'Bad Request, please provide a type.');
        return res.status(400).json({ error: 'Bad Request, please provide a type.' });
    }

    try
    {
        const newUtility = new Utilities({ type, description });
        await newUtility.save();
        logger.log(filename, `Created new utility with id ${newUtility.id} ...`);
        res.status(201).json({message: 'OK', data: {newUtility}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Update a utility by id */
const updateUtility = async(req, res) =>
{
    const id = req.params.id;
    if(!id  || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    const { name, description, type } = req.body;
    try
    {
        const utility = Utilities.findByIdAndUpdate(id, { name, description, type });
        logger.log(filename, `Updated utility with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {utility}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete a utility by id */
const deleteUtility = async(req, res) =>
{
    const id = req.params.id;
    if(!id  || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    try
    {
        const utility = Utilities.findByIdAndDelete(id);
        logger.log(filename, `Deleted utility with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {utility}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all utilities */
const deleteAllUtilities = async(req, res) =>
{
    try
    {
        const utility = await Utilities.deleteMany();
        logger.log(filename, `Deleted ${utility.deletedCount} customers ...`);
        res.status(200).json({message: 'OK', data: {utility}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
}


module.exports = {  getAllUtilities,
                    getUtilityById,
                    createUtility,
                    updateUtility,
                    deleteUtility,
                    deleteAllUtilities
                };