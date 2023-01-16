const {Router}= require ('express');
const { getAllCount,GetCountryId } = require('../controllers/country.js');

const router =Router()

router.get('/',getAllCount);

router.get('/:id',GetCountryId)

module.exports= router;