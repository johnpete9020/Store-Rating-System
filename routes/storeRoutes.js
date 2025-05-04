const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// GET /api/stores
router.get('/', storeController.getAllStores);
router.post('/', storeController.createStore);

module.exports = router;
