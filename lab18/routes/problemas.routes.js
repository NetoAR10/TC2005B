const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const problemasController = require('../controllers/problemas.controller');

router.get('/problema1', isAuth, problemasController.get_problema1);
router.post('/problema1', isAuth, problemasController.post_problema1);

router.get('/problema2', isAuth, problemasController.get_problema2);
router.post('/problema2', isAuth, problemasController.post_problema2);

router.get('/problema3', isAuth, problemasController.get_problema3);
router.post('/problema3', isAuth, problemasController.post_problema3);

router.get('/problema4', isAuth, problemasController.get_problema4);
router.post('/problema4', isAuth, problemasController.post_problema4);

router.get('/problema5', isAuth, problemasController.get_problema5);
router.post('/problema5', isAuth, problemasController.post_problema5);

router.get('/problema6', isAuth, problemasController.get_problema6);
router.post('/problema6', isAuth, problemasController.post_problema6);

router.get('/:problema_id', isAuth, problemasController.get_root);

router.get('/', isAuth, problemasController.get_root);
module.exports = router;