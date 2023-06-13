const express = require('express');
const router = express.Router();

const { getAllFloorTypes, getFloorTypeById, createFloorType, updateFloorType, deleteFloorType, deleteAllFloorTypes } = require('../controllers/FloorTypes')

/* @desc Get all floor types */
router.get('/', getAllFloorTypes)
/* @desc Get a floor type by id */
router.get('/:id', getFloorTypeById)
/* @desc Create a new floor type */
router.post('/', createFloorType)
/* @desc Update a floor type by id */
router.patch('/:id', updateFloorType)
/* @desc Delete a floor type by id */
router.delete('/:id', deleteFloorType)
/* @desc Delete all floor types */
router.delete('/', deleteAllFloorTypes)


module.exports = router