
const express = require('express');
const router = express.Router();

const products = require('../data/products');

const shopController = require('../controllers/shop.controller');
// Search Route
router.get('/search', (req, res) => {

    const searchTerm = (req.query.q || '').trim().toLowerCase();

    if (!searchTerm) {
        return res.redirect('/');
    }

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    });

    res.render('pages/home', {
        title: 'Search Results',
        tagline: `Results for "${searchTerm}"`,
        products: filteredProducts
    });

});


// Category Route
router.get('/:category', shopController.getCategoryProducts);


// Category + Brand Route
router.get('/:category/:brand', shopController.getBrandProducts);


// Product Details Route
router.get('/:category/:brand/:slug', shopController.getProductDetails);



module.exports = router;