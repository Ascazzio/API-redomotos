const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/PartRouter');
const OrderRouter = require('./views/OrderRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/users', UserRouter);
router.use('/parts', PartsRouter);
router.use('/orders', OrderRouter);

module.exports = router;