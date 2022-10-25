const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/puzle2',navigationController.getPuzle2)
router.get('/puzle3',navigationController.getPuzle3)
router.get('/puzle4',navigationController.getPuzle4)
router.get('/puzle5',navigationController.getPuzle5)
router.get('/puzle6',navigationController.getPuzle6)
router.get('/registerForm',navigationController.getRegisterForm)
router.get('/loginForm',navigationController.getLoginForm)
router.get('/tips',navigationController.getTips)
module.exports = router;