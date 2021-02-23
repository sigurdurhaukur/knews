const { Router } = require('express');
const settingsController = require('../controllers/settingsController');

const router = Router();

router.get('/menu', settingsController.menu_get);
router.post('/settings/fb', settingsController.settings_fb);
router.post('/settings/mbl', settingsController.settings_mbl);
router.post('/settings/visir', settingsController.settings_visir);
router.post('/settings/man', settingsController.settings_man);
router.post('/settings/fotbolti', settingsController.settings_fotbolti);

router.post('/settings/dv', settingsController.settings_dv);
router.post('/settings/klippa', settingsController.settings_klippa);
router.post('/settings/kjarninn', settingsController.settings_kjarninn);
router.post('/settings/ruv', settingsController.settings_ruv);
router.post('/settings/stundin', settingsController.settings_stundin);
router.post('/settings/kaktus', settingsController.settings_kaktus);
router.post('/settings/ron', settingsController.settings_ron);

module.exports = router;
