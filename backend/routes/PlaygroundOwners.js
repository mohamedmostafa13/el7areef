const express = require('express');
const router = express.Router();

const { getAllPlaygroundOwners, 
        getPlaygroundOwnerById, 
        createPlaygroundOwner, 
        updatePlaygroundOwner, 
        deletePlaygroundOwner, 
        deleteAllPlaygroundOwners 
} = require('../controllers/PlaygroundOwners.js')


/* @desc Get a playground owner by id */
router.get('/', getAllPlaygroundOwners)

/* @desc Get a playground owner by id */
router.get('/:id', getPlaygroundOwnerById)

/* @desc Create a new playground owner */
router.post('/', createPlaygroundOwner)

/* @desc Update a playground owner by id */
router.patch('/:id', updatePlaygroundOwner)

/* @desc Delete a playground owner by id */
router.delete('/:id', deletePlaygroundOwner)

/* @desc Delete all playground owners */
router.delete('/', deleteAllPlaygroundOwners)


module.exports = router