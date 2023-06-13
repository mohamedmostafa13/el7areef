const express = require('express');
const router = express.Router();

const { getAllReservations, getReservationById, createReservation, updateReservation, deleteReservation, deleteAllReservations } = require('../controllers/Reservations')

/* @desc Get all reservations */
router.get('/', getAllReservations)

/* @desc Get a reservation by id */
router.get('/:id', getReservationById)

/* @desc Create a new reservation */
router.post('/', createReservation)

/* @desc Update a reservation by id */
router.patch('/:id', updateReservation)

/* @desc Delete a reservation by id */
router.delete('/:id', deleteReservation)

/* @desc Delete all reservations */
router.delete('/', deleteAllReservations)


module.exports = router