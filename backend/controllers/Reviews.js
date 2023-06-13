const express = require('express');
const router = express.Router();
const logger = require('../utils/Logger');
const Review = require('../models/Reviews');
const Customer = require('../models/Customers');
const { Exists } = require('../utils/db.utils');
const mongoose = require('mongoose');
const Playground = require('../models/Playgrounds');


const filename = 'Reviews.js';


/* DATABASE SCHEMA 

- id: Int, Auto Increment, Primary Key, Unique, Required
- userId: Users, Required
- playgroundId: Playgrounds, Required
- rating: Double, Required
- comment: String

*/

/* API ENDPOINTS

- GET /api/v1/admin/reviews - Get all reviews
- GET /api/v1/admin/reviews/:id - Get a review by id
- POST /api/v1/admin/reviews - Create a new review
- PATCH /api/v1/admin/reviews/:id - Update a review by id
- DELETE /api/v1/admin/reviews/:id - Delete a review by id
- DELETE /api/v1/admin/reviews - Delete all reviews
*/


/* @desc Get all reviews */
const getAllReviews = async(req, res) =>
{
    try
    {
        const reviews = await Review.find()
        logger.log(filename, 'Sending all Reviews ...');
        res.status(200).json({message: 'OK', data: {reviews}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Get a review by id */
const getReviewById = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }
    
    try
    {
        const review = await Review.findById(id);
        if(!review)
        {
            logger.log(filename, 'Not Found, review not found.');
            return res.status(404).json({ error: 'Not Found, review not found.' });
        }

        logger.log(filename, `Sending review with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {review}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Create a new review */
const createReview = async(req, res) =>
{
    const { userId, playgroundId, rating, comment } = req.body;

    if(!userId || !playgroundId || !rating || !mongoose.isValidObjectId(userId) || !mongoose.isValidObjectId(playgroundId) || !Exists(Playground, '_id', playgroundId) || !Exists(Customer, '_id', userId))    
    {
        logger.error(filename, 'Bad Request, missing parameters or invalid ids.');
        return res.status(400).json({ error: 'Bad Request, missing parameters or invalid ids' });
    }
    try
    {
        const newReview = new Review({ userId, playgroundId, rating, comment });
        await newReview.save();
        logger.log(filename, `Created new review with id ${newReview.id} ...`);
        res.status(201).json({message: 'OK', data: {newReview}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Update a review by id */
const updateReview = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    const { userId, playgroundId, rating, comment } = req.body;

    if(userId !== null && (!mongoose.isValidObjectId(userId) || !Exists(Customer, '_id', userId)))
    {
        logger.error(filename, 'Bad Request, invalid userId.');
        return res.status(400).json({ error: 'Bad Request, invalid userId.' });
    }

    if(playgroundId !== null && (!mongoose.isValidObjectId(playgroundId) || !Exists(Playground, '_id', playgroundId)))
    {
        logger.error(filename, 'Bad Request, invalid playgroundId.');
        return res.status(400).json({ error: 'Bad Request, invalid playgroundId.' });
    }
    
    try
    {
        const review = Review.findByIdAndUpdate(id, { userId, playgroundId, rating, comment });
        logger.log(filename, `Updated review with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {review}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete a review by id */
const deleteReview = async(req, res) =>
{
    const id = req.params.id;
    if(!id || !mongoose.isValidObjectId(id))
    {
        logger.error(filename, 'Bad Request, please provide an id.');
        return res.status(400).json({ error: 'Bad Request, please provide an id.' });
    }

    try
    {
        const review = Review.findByIdAndDelete(id);
        logger.log(filename, `Deleted review with id ${id} ...`);
        res.status(200).json({message: 'OK', data: {review}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
};

/* @desc Delete all reviews */
const deleteAllReviews = async(req, res) =>
{
    try
    {
        const review = await Review.deleteMany();
        logger.log(filename, `Deleted ${review.deletedCount} customers ...`);
        res.status(200).json({message: 'OK', data: {review}})
    }
    catch(err)
    {
        logger.error(filename, err);
        res.status(500).json({ error: 'Server error' });    
    }
}


module.exports = {  getAllReviews,
                    getReviewById,
                    createReview,
                    updateReview,
                    deleteReview,
                    deleteAllReviews
                };