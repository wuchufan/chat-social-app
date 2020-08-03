const express = require('express');
const Visitor = require('../../models/Visit');
const apiAuth = require('../../middleware/visit');
const router = express.Router();

const{
  getVisit,
  recordVisit,
  getVisitStats
} = require('../../controllers/visitController');

router.route('/')
.get(apiAuth,getVisit)
.post(recordVisit);

router.route('/visit-stats')
.get(apiAuth,getVisitStats);


module.exports = router;
