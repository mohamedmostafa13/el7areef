const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Customer = require('../models/Customers');
const Playground = require('../models/Playgrounds');
const logger = require('../utils/Logger');
const Reservation = require('../models/Reservations.js');
const { Exists } = require('../utils/db.utils');

const filename = 'Reservations.js';

/* API ENDPOINTS
- GET /api/v1/admin/reservations - Get all reservations
- GET /api/v1/admin/reservations/:id - Get a reservation by id
- POST /api/v1/admin/reservations - Create a new reservation
- PUT /api/v1/admin/reservations/:id - Update a reservation by id
- DELETE /api/v1/admin/reservations/:id - Delete a reservation by id
- DELETE /api/v1/admin/reservations - Delete all reservations
*/


/* DATABASE SCHEMA 
- id: Int, Auto Increment, Primary Key, Unique, Required
- userId: Users, Required
- playgroundId: Playgrounds, Required
- date: Date, Required
- price: Double, Required
- isPaid: Bool, default: false
- isCanceled: Bool, default: false
- isDeleted: Bool, default: false
- isReviewed: Bool, default: false
- profit: Double, default: 0
- timeSlot: String, Required
*/

/* @desc Get all reservations */
const getAllReservations = async(req, res) =>
{
    try
    {
        const reservations = await Reservation.find()
        logger.log(filename, 'Sending all reservations ...');
        res.status(200).json({message: 'OK', data: {reservations}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a reservation by id */
const getReservationById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Missing id parameter');
        return res.status(400).json({ error: 'Bad request' });
    }
    try
    {
        const reservation = await Reservation.findById(id)
        logger.log(filename, `Sending reservation with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {reservation}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new reservation */
const createReservation = async(req, res) =>
{
    const {userId, playgroundId, date, price, isPaid, isCanceled, isDeleted, isReviewed, profit, timeSlot} = req.body;
    if(!userId || !mongoose.isValidObjectId(userId) || !playgroundId || !mongoose.isValidObjectId(playgroundId) || !date || !price || !timeSlot || !Exists(Customers, '_id', userId) || !Exists(Playgrounds, '_id', playgroundId))
    {
        logger.error(filename, 'Missing required parameters');
        return res.status(400).json({ error: 'Bad request, missing required paramaters, or invalid IDs.' });
    }

    try
    {
        const reservation = await Reservation.create({userId, playgroundId, date, price, isPaid, isCanceled, isDeleted, isReviewed, profit, timeSlot});
        logger.log(filename, `Created reservation with id ${reservation.id}`);
        res.status(200).json({message: 'OK', data: {reservation}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Update a reservation by id */
const updateReservation = async(req, res) =>
{
    const id = req.params.id;
    const {userId, playgroundId, date, price, isPaid, isCanceled, isDeleted, isReviewed, profit, timeSlot} = req.body;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Missing required parameters');
        return res.status(400).json({ error: 'Bad request' });
    }

    if(userId !== null && (!mongoose.isValidObjectId(userId) || !Exists(Customer, '_id', userId)))
    {
        logger.error(filename, 'Invalid userId');
        return res.status(400).json({ error: 'Bad request, invalid userId' });
    }

    if(playgroundId !== null && (!mongoose.isValidObjectId(playgroundId) || !Exists(Playground, '_id', playgroundId)))
    {
        logger.error(filename, 'Invalid playgroundId');
        return res.status(400).json({ error: 'Bad request, invalid playgroundId' });
    }

    try
    {
        const reservation = await Reservation.findByIdAndUpdate(id, {userId, playgroundId, date, price, isPaid, isCanceled, isDeleted, isReviewed, profit, timeSlot});
        logger.log(filename, `Updated reservation with id ${id}`);
        res.status(200).json({message: 'OK', data: {reservation}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete a reservation by id */
const deleteReservation = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Missing id parameter');
        return res.status(400).json({ error: 'Bad request' });
    }
    try
    {
        const reservation = await Reservation.findByIdAndDelete(id);
        logger.log(filename, `Deleted reservation with id ${id}`);
        res.status(200).json({message: 'OK', data: {reservation}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all reservations */
const deleteAllReservations = async(req, res) =>
{
    try
    {
        const reservations = await Reservation.deleteMany();
        logger.log(filename, `Deleted all reservations`);
        res.status(200).json({message: 'OK', data: {reservations}});
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
}

module.exports = {  getAllReservations, 
                    getReservationById, 
                    createReservation, 
                    updateReservation, 
                    deleteReservation, 
                    deleteAllReservations 
                };