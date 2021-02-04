var express = require('express');
var router = express.Router();
const { Album } = require('../db/models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const albums = await Album.findAll();
  res.render('index', { albums, title: 'Good Vibes' });
});

module.exports = router;
