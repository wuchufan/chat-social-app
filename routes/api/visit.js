const express = require('express');
const Visitor = require('../../models/Visit');
const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const visitNum = new Visitor({});

    const result = await visitNum.save();
    res.json({msg: result})
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: err});
  }

}).put(async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    try {
      const visitResult = await Visitor.findOneAndUpdate({
        function: 'User visit number recording'
      }, {
        $inc: {
          visited: 1
        }
      }, {new: true});
      res.json({msg: visitResult});

    } catch (err) {

      res.status(500).json({msg: err});
    }
  }

})

module.exports = router;
