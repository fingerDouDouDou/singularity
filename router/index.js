/**
 * Created by gsh on 2017/9/9.
 */

const express = require('express');
let router = express.Router();
let testRouter = require('./test');
let animationRouter = require('./animation');
let canvasRouter = require('./canvas');

router.use('/test',testRouter);
router.use('/animation',animationRouter);
router.use('/canvas',canvasRouter);

module.exports = router;