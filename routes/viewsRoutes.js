const { Router } = require('express');
const viewsController = require('../controllers/viewsController');

const router = Router();

router.post('/views', viewsController.updateView);
router.get('/views', (req, res) => {
	res.send('working');
});

module.exports = router;
