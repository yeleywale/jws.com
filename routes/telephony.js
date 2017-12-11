var express = require('express');
var router = express.Router();

// express.locals.description = 'Jaracare helps company achieve the goals using the right technologies as a lever';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('telephony', { title: 'Web Telephony', description: 'The communication paradigm has since changed, web telephony is now possible today' });
});

module.exports = router;