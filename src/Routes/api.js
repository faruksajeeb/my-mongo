const express = require("express");
const AdminController = require('../Controllers/adminController.js');
const SubAdminController = require('../Controllers/subAdminController.js');
const UserController = require('../Controllers/userController.js');
const PostController = require('../Controllers/postController.js');

const router = express.Router();

// Admin Routes
router.get('/admin/manage',AdminController.read);
router.get('/admin/create',AdminController.create);
router.get('/admin/update',AdminController.update);
router.get('/admin/delete',AdminController.delete);
// Sub Admin Routes
router.get('/subadmin/manage',SubAdminController.read);
router.get('/subadmin/create',SubAdminController.create);
router.get('/subadmin/update',SubAdminController.update);
router.get('/subadmin/delete',SubAdminController.delete);
// User Routes
router.get('/user/manage',UserController.read);
router.get('/user/create',UserController.create);
router.get('/user/update',UserController.update);
router.get('/user/delete',UserController.delete);
// Post Routes
router.get('/post/manage',PostController.read);
router.get('/post/create',PostController.create);
router.get('/post/update',PostController.update);
router.get('/post/delete',PostController.delete);

module.exports = router;