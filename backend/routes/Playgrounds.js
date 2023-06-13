const express = require('express');
const router = express.Router();

const { getAllPlaygrounds, getPlaygroundById, createPlayground, updatePlayground, deletePlayground, deleteAllPlaygrounds } = require('../controllers/Playgrounds')



/* @desc Get all playgrounds */
router.get('/', getAllPlaygrounds)
/* @desc Get a playground by id */
router.get('/:id', getPlaygroundById)
/* @desc Create a new playground */
router.post('/', createPlayground)
/* @desc Update a playground by id */
router.patch('/:id', updatePlayground)
/* @desc Delete a playground by id */
router.delete('/:id', deletePlayground)
/* @desc Delete all playgrounds */
router.delete('/', deleteAllPlaygrounds)


module.exports = router