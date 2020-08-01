const express = require('express');
const Visitor = require('../../models/Visit');
const router = express.Router();

const{
  getVisit,
  recordVisit,
  getVisitStats
} = require('../../controllers/visitController');

router.route('/')
.get(getVisit)
.post(recordVisit);

router.route('/visit-stats')
.get(getVisitStats);


module.exports = router;
