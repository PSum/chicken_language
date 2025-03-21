const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        res.send("Hello")

  } catch (err) {
    console.log(err);
    res.status(500).send('There has been an error' + err)
  }
})

module.exports = router;