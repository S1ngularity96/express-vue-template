let express = require('express');
let apiRouter = express.Router();
let homeRoutes = require('./api/homeRoutes')

apiRouter.use('/home', homeRoutes);



module.exports = apiRouter;
