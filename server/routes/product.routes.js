import express from 'express';
import userCtrl from '../controllers/product.controller.js';
const router = express.Router();
// router.route('/api/products') 
// .get(userCtrl.list)
// .post(userCtrl.create)
router.route('/api/users/:productId')
    .get(userCtrl.read)
    .put(userCtrl.update)
    .delete(userCtrl.remove);
router.param('productId', userCtrl.userByID);
router.route('/api/products').post(userCtrl.create);
router.route('/api/products').get(userCtrl.list);
router.route('/api/products').delete(userCtrl.removeAll);
// router.param('userId', userCtrl.userByID);
router.route('/api/products/:productId').get(userCtrl.read);
router.route('/api/products/:productId').put(userCtrl.update);
router.route('/api/products/:productId').delete(userCtrl.remove);

export default router
