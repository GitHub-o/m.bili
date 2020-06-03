const router = require('koa-router')(),
      controller = require('../controllers');

router.prefix('/api');

router.get('/get_home_data', controller.getHomeData);
router.post('/get_feature_data', controller.getFeatureData);
router.post('/get_list_data', controller.getListData);

module.exports = router;
