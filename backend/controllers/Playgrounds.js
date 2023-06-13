const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const logger = require('../utils/Logger');
const Playground = require('../models/Playgrounds');
const { Exists } = require('../utils/db.utils');

const filename = 'Playgrounds.js';

/* ENDPOINTS
- GET /api/v1/admin/playgrounds - Get all playgrounds
- GET /api/v1/admin/playgrounds/:id - Get a playground by id
- POST /api/v1/admin/playgrounds - Create a new playground
- PUT /api/v1/admin/playgrounds/:id - Update a playground by id
- DELETE /api/v1/admin/playgrounds/:id - Delete a playground by id
- DELETE /api/v1/admin/playgrounds - Delete all playgrounds
*/

/* DATABASE SCHEMA
- id: Int, Auto Increment, Primary Key, Unique, Required
- name: String, Required
- address: String, Required
- lang: Double
- lat: Double
- country: String
- city: String
- neighborhood: String
- description: String
- pricePerHour: Double
- ownerId: PlaygroundOwners, Required
- images: [String] # URLs of images
- utilities: [Utilities]
- rating: Double
- workingHours: String
- floorType: [FloorTypes]
- visa: Bool, default: false
- visaOnly: Bool, default: false
- isVerified: Bool, default: false
- isAvailable: Bool, default: true
- isDeleted: Bool, default: false
*/

/* @desc Get all playgrounds */
const getAllPlaygrounds = async(req, res) =>
{
    try
    {
        const playgrounds = await Playground.find()
        res.status(200).json({message: 'OK', data: {playgrounds}})
    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a playground by id */
const getPlaygroundById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });

    try
    {
        const playground = await Playground.findById(id);
        if(!playground)
            return res.status(404).json({ message: 'Not Found' });
        
        res.status(200).json({message: 'OK', data: {playground}})
    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new playground */
const createPlayground = async(req, res) =>
{
    const { name, address, lang, lat, country, city, neighborhood, description, pricePerHour, ownerId, images, utilities, rating, workingHours, floorType, visa, visaOnly, isVerified, isAvailable, isDeleted } = req.body;
    
    if(!name || !address || !ownerId || !mongoose.isValidObjectId(ownerId))
    {
        logger.log(filename, `Bad Request, please provide valid name, address and ownerId.`);
        return res.status(400).json({ error: 'Bad Request, please provide validname, address and ownerId' });
    }
    
    exists, owner = Exists(PlaygroundOwners, '_id', ownerId);

    if(!exists)
    {
        logger.log(filename, `Owner with id ${ownerId} does not exist, can't create the playground.`);
        return res.status(400).json({ error: 'Bad Request, please provide a valid ownerId' });
    }

    try
    {
        const playground = await Playground.create({ name, address, lang, lat, country, city, neighborhood, description, pricePerHour, ownerId, images, utilities, rating, workingHours, floorType, visa, visaOnly, isVerified, isAvailable, isDeleted });
        res.status(201).json({message: 'OK', data: {playground}})
    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }

    /*
    Create a dummy playground request body for testing purposes
    {
        "name": "Playground 1", "address": "Address 1", "lang": 1.1, "lat": 1.1, "country": "Country 1", "city": "City 1",
        "neighborhood": "Neighborhood 1", "description": "Description 1", "pricePerHour": 1.1, "ownerId": "5f9d7b7b9d3b1c2d0c3b0b1a",
        "images": ["Image 1", "Image 2"], "utilities": ["Utility 1", "Utility 2"], "rating": 1.1,
        "workingHours": "Working Hours 1", "floorType": ["Floor Type 1", "Floor Type 2"], "visa": true,
        "visaOnly": true, "isVerified": false, "isAvailable": true, "isDeleted": false
    }
*/
};

const updatePlayground = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
        return res.status(400).json({ error: 'Bad Request, please provide an id' });
    
    try
    {
        
        const { name, address, lang, lat, country, city, neighborhood, description, pricePerHour, ownerId, images, utilities, rating, workingHours, floorType, visa, visaOnly, isVerified, isAvailable, isDeleted } = req.body;
        
        if(ownerId != null && !mongoose.isValidObjectId(ownerId) && !Exists(PlaygroundOwners, '_id', ownerId))
        {
            logger.log(filename, `Owner with id ${ownerId} does not exist, can't update the playground.`);
            return res.status(400).json({ error: 'Bad Request, please provide a valid ownerId' });
        }

        await Playground.findByIdAndUpdate(id, { name, address, lang, lat, country, city, neighborhood, description, pricePerHour, ownerId, images, utilities, rating, workingHours, floorType, visa, visaOnly, isVerified, isAvailable, isDeleted });
        res.status(200).json({message: 'OK', data: {playground}})

    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

const deletePlayground = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
        return res.status(400).json({ error: 'Bad Request, please provide an id' });

    try
    {
        await Playground.findByIdAndDelete(id);
        res.status(200).json({message: 'OK'})
    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

const deleteAllPlaygrounds = async(req, res) =>
{
    try
    {
        await Playground.deleteMany();
        res.status(200).json({message: 'OK'})
    }
    catch(err)
    {
        logger.log(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

module.exports = {  getAllPlaygrounds, 
                    getPlaygroundById, 
                    createPlayground, 
                    updatePlayground, 
                    deletePlayground, 
                    deleteAllPlaygrounds 
                };