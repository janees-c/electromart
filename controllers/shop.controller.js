const products = require('../data/products');

// Category Controller
const getCategoryProducts = (req, res) => {

  const category = req.params.category;

  const filteredProducts = products.filter((product) => {
    return product.category.toLowerCase() === category.toLowerCase();
  });

  res.render('pages/home', {
    title: category,
    tagline: `Explore ${category}`,
    products: filteredProducts
  });

};


// Brand Controller
const getBrandProducts = (req, res) => {

  const category = req.params.category;
  const brand = req.params.brand;

  const filteredProducts = products.filter((product) => {
    return (
      product.category.toLowerCase() === category.toLowerCase() &&
      product.brand.toLowerCase() === brand.toLowerCase()
    );
  });

  res.render('pages/home', {
    title: `${brand} ${category}`,
    tagline: `Explore ${brand} ${category}`,
    products: filteredProducts
  });

};

// product details contriller
const getProductDetails = (req, res) => {

  const slug = req.params.slug;

  const product = products.find((item) => {
    return item.slug === slug;
  });

  if (!product) {
    return res.status(404).render('pages/404', {
        title: 'Product Not Found'
    });
}

  res.render('pages/productDetails', {
    product: product
  });

};


// Export
module.exports = {
  getCategoryProducts,
  getBrandProducts,
  getProductDetails
};