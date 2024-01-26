const express = require ('express');
const router = express.Router()

const {mostrar} = require('../controller/dashboardController')

router.get('/', mostrar) 

module.exports = router 