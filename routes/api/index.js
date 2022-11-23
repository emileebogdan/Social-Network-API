const router = require('express').Router();
const userRoutes = require('./user-route');
const thoughtRoutes = require('./thought-route');

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router