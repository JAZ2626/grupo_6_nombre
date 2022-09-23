const express = require('express');
const controller = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/img'));
    },

    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});

router.get('/productDetail', controller.productDetailOriginal);

router.get('/productDetail/:id', controller.productDetail);

router.get('/products', controller.products);

router.get('/services', controller.services);

router.get('/:id/edit', controller.editProduct);

router.put('/:id', upload.single('image'),  controller.actualice);

router.delete('/', controller.delete);

router.get('/addProduct', controller.getProduct);

router.post('/addProduct', upload.single('image'), controller.addProduct);




// router.get('/productCart', controller.productCart);


module.exports = router;