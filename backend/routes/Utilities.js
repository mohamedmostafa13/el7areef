const express = require('express');
const router = express.Router();

const { getAllUtilities, getUtilityById, createUtility, updateUtility, deleteUtility, deleteAllUtilities } = require('../controllers/Utilities')



/* @desc Get all Utilities */
router.get('/', getAllUtilities)
/* @desc Get a utility by id */
router.get('/:id', getUtilityById)
/* @desc Create a new utility */
router.post('/', createUtility)
/* @desc Update a utility by id */
router.patch('/:id', updateUtility)
/* @desc Delete a utility by id */
router.delete('/:id', deleteUtility)
/* @desc Delete all Utilities */
router.delete('/', deleteAllUtilities)


module.exports = router