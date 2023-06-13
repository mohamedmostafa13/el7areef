const express = require('express');
const mongoose = require('mongoose');
const logger = require('../utils/Logger');
const PlaygroundOwner = require('../models/PlaygroundOwners');
const { Exists } = require('../utils/db.utils');


const filename = 'PlaygroundsOwners.js';

/* DATABASE SCHMEA 

- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- phone: String, Required
- username: String, Required
- password: String (hashed), Required
- email: String
- totalBalance: Double, default: 0

*/

/* API ENDPOINTS
- GET /api/v1/admin/playgroundOwners - Get all playground owners
- GET /api/v1/admin/playgroundOwners/:id - Get a playground owner by id
- POST /api/v1/admin/playgroundOwners - Create a new playground owner
- PUT /api/v1/admin/playgroundOwners/:id - Update a playground owner by id
- DELETE /api/v1/admin/playgroundOwners/:id - Delete a playground owner by id
- DELETE /api/v1/admin/playgroundOwners - Delete all playground owners

*/

/* @desc Get all playground owners */
const getAllPlaygroundOwners = async(req, res) =>
{
    try
    {
        const playgroundOwners = await PlaygroundOwner.find()
        logger.log(filename, 'Sending all playground owners ...');
        res.status(200).json({message: 'OK', data: {playgroundOwners}})
    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

const getPlaygroundOwnerById = async(req, res) =>
{
    const id = req.params.id;

    if(!id || !mongoose.isValidObjectId(id))
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });

    try
    {
        const playgroundOwner = await PlaygroundOwner.findById(id);
        logger.log(filename, `playground owner: ${playgroundOwner}`);
        if(!playgroundOwner)
            return res.status(404).json({ error: 'Not Found, playground owner not found.' });
        
        logger.log(filename, `Sending playground owner with id: ${id} ...`);
        res.status(200).json({message: 'OK', data: {playgroundOwner}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new playground owner */
const createPlaygroundOwner = async(req, res) =>
{
    const { name, phone, username, password, email, totalBalance } = req.body;

    if(!name || !phone || !username || !password)
    {
        logger.log(filename, 'Bad Request, please provide all required fields.');
        return res.status(400).json({ error: 'Bad Request, please provide all required fields.' });
    }

    const { exists, _ } = await Exists(PlaygroundOwner, 'username', username);
    
    if(exists)
    {
        logger.log(filename, `Username: ${username} already exists.`);
        return res.status(400).json({ error: 'Bad Request, username already exists.'});
    }
    
    try
    {
        const playgroundOwner = await PlaygroundOwner.create({ name, phone, username, password, email, totalBalance });
        logger.log(filename, `Created playground owner with id: ${playgroundOwner._id}.`);
        res.status(201).json({message: 'Created', data: {playgroundOwner}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }

    /* 
        Create a dummy playground owner request body for testing purposes.
        {
            "name": "Ahmed",
            "phone": "01111111111",
            "username": "ahmed",
            "password": "123456",
            "email": "xx@xx.com",
            "totalBalance": 0
        }
    
    */
}

/* @desc Update a playground owner by id */
const updatePlaygroundOwner = async(req, res) =>
{
    const id = req.params.id;

    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.log(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    try
    {
        const { name, phone, username, password, email, totalBalance } = req.body;
        
        const playgroundOwner = await PlaygroundOwner.findByIdAndUpdate(id, { name, phone, username, password, email, totalBalance });
        logger.log(filename, `Updated playground owner with id: ${id}.`);
        res.status(200).json({message: 'OK', data: {playgroundOwner}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
    
};

/* @desc Delete a playground owner by id */
const deletePlaygroundOwner = async(req, res) =>
{
    const id = req.params.id;

    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.log(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }
    
    try
    {

        logger.log(filename, `Deleting playground owner with id: ${id} if exists...`);
        await PlaygroundOwner.findByIdAndDelete(id);
        res.status(200).json({message: 'OK'})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all playground owners */
const deleteAllPlaygroundOwners = async(req, res) =>
{
    try
    {
        await PlaygroundOwner.deleteMany();
        logger.log(filename, 'Deleted all playground owners.');
        res.status(200).json({message: 'OK', data: {}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};


module.exports = {  getAllPlaygroundOwners, 
                    getPlaygroundOwnerById, 
                    createPlaygroundOwner, 
                    updatePlaygroundOwner, 
                    deletePlaygroundOwner, 
                    deleteAllPlaygroundOwners 
                };