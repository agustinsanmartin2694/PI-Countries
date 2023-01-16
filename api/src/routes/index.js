const { Router } = require('express');
// Importar todos los routers;
  const countryRouter = require('./country.js');
const activitiesRouter=require('./activities.js')

const router = Router();

// Configurar los routers
  router.use('/countries',countryRouter);
  router.use('/activities',activitiesRouter)


module.exports = router;
