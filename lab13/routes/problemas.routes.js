const express = require('express');
const router = express.Router();
const problemasController = require('../controllers/problemas.controller');

router.get('/problema1', problemasController.get_problema1);
router.post('/problema1', problemasController.post_problema1);

router.get('/problema2', problemasController.get_problema1);
router.post('/problema2', problemasController.post_problema1);

router.get('/problema3', problemasController.get_problema1);
router.post('/problema3', problemasController.post_problema1);

router.get('/problema4', problemasController.get_problema1);
router.post('/problema4', problemasController.post_problema1);

router.get('/problema5', problemasController.get_problema1);
router.post('/problema5', problemasController.post_problema1);

router.get('/problema6', problemasController.get_problema1);
router.post('/problema6', problemasController.post_problema1);

router.get('/', problemasController.get_root);
module.exports = router;