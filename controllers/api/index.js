'use strict';

const express = require('express'),
      router = express.Router(),
      request = require('request'),
      cheerio = require('cheerio'),
      Article = require('../../models/article')

router.get('/', function(req, res) {
    res.status(200).send('<a href=\'/api/articles/\'>articles</a>');
});

router.use('/articles', require('./articles'));

module.exports = router;