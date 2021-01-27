const { Router } = require('express');
const settingsController = require('../controllers/settingsController');

const router = Router();

router.get('/menu', settingsController.menu_get);
router.post('/settings/fb', settingsController.settings_fb);
router.post('/settings/mbl', settingsController.settings_mbl);

module.exports = router;
