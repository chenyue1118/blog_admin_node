const express = require('express');
const router = new express.Router();

const dashboard = require('./dashboard');
const users = require('./users');
const article = require('./article');

// 拦截
// router.route('/')
//     .all(controller.index);

router.use('/dashboard', dashboard);
router.use('/users', users);
router.use('/article', article);

// module exports
module.exports = router;
