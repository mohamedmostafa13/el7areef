const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const logger = require('../utils/Logger');
const FloorType = require('../models/FloorTypes.js');

const filename = 'FloorTypes.js';

/* API ENDPOINTS
- GET /api/v1/admin/floortypes - Get all floor types
- GET /api/v1/admin/floortypes/:id - Get a floor type by id
- POST /api/v1/admin/floortypes - Create a new floor type
- PATCH /api/v1/admin/floortypes/:id - Update a floor type by id
- DELETE /api/v1/admin/floortypes/:id - Delete a floor type by id
- DELETE /api/v1/admin/floortypes - Delete all floor types
*/


/* DATABASE SCHEMA 
- id: Int, Auto Increment, Primary Key, Unique, Required
- type: String, Required
- description: String
*/

/* @desc Get all floortypes */
const getAllFloorTypes = async(req, res) =>
{
    try
    {
        const floortypes = await FloorType.find()
        logger.log(filename, 'Sending all floortypes ...');
        res.status(200).json({message: 'OK', data: {floortypes}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a floortype by id */
const getFloorTypeById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Missing id parameter');
        return res.status(400).json({ error: 'Bad request' });
    }

    try
    {
        const floortype = await FloorType.findById(id)
        logger.log(filename, `Sending floortype with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {floortype}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new floortype */
const createFloorType = async(req, res) =>
{
    const { type, description } = req.body;
    if(!type)
    {
        logger.error(filename, 'Missing required parameters');
        return res.status(400).json({ error: 'Bad request' });
    }

    try
    {
        const floortype = await FloorType.create({type, description});
        logger.log(filename, `Created floortype with id ${floortype.id}`);
        res.status(200).json({message: 'OK', data: {floortype}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Update a floortype by id */
const updateFloorType = async(req, res) =>
{
    const id = req.params.id;
    const { type, description } = req.body;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Missing required parameters');
        return res.status(400).json({ error: 'Bad request' });
    }

    try
    {
        const floortype = await FloorType.findByIdAndUpdate(id, {type, description});
        logger.log(filename, `Updated floortype with id ${id}`);
        res.status(200).json({message: 'OK', data: {floortype}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete a floortype by id */
const deleteFloorType = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Missing id parameter');
        return res.status(400).json({ error: 'Bad request' });
    }
    try
    {
        const floortype = await FloorType.findByIdAndDelete(id);
        logger.log(filename, `Deleted floortype with id ${id}`);
        res.status(200).json({message: 'OK', data: {floortype}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all floortypes */
const deleteAllFloorTypes = async(req, res) =>
{
    try
    {
        const floortypes = await FloorType.deleteMany();
        logger.log(filename, `Deleted all floortypes`);
        res.status(200).json({message: 'OK', data: {floortypes}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
}

module.exports = {  getAllFloorTypes, 
                    getFloorTypeById, 
                    createFloorType, 
                    updateFloorType, 
                    deleteFloorType, 
                    deleteAllFloorTypes 
                };