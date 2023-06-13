const express = require('express');
const router = express.Router();

const { getAllReviews, getReviewById, createReview, updateReview, deleteReview, deleteAllReviews } = require('../controllers/Reviews')

/* @desc Get all reviews */
router.get('/', getAllReviews)
/* @desc Get a review by id */
router.get('/:id', getReviewById)
/* @desc Create a new review */
router.post('/', createReview)
/* @desc Update a review by id */
router.patch('/:id', updateReview)
/* @desc Delete a review by id */
router.delete('/:id', deleteReview)
/* @desc Delete all reviews */
router.delete('/', deleteAllReviews)


module.exports = router