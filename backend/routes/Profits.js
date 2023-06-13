const express = require('express');
const router = express.Router();

const { getAllProfits, getProfitById, createProfit, updateProfit, deleteProfit, deleteAllProfits } = require('../controllers/Profits')



/* @desc Get all Profits */
router.get('/', getAllProfits)
/* @desc Get a Profit by id */
router.get('/:id', getProfitById)
/* @desc Create a new Profit */
router.post('/', createProfit)
/* @desc Update a Profit by id */
router.patch('/:id', updateProfit)
/* @desc Delete a Profit by id */
router.delete('/:id', deleteProfit)
/* @desc Delete all Profits */
router.delete('/', deleteAllProfits)


module.exports = router