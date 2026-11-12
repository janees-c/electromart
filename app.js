
const express = require('express');
const path = require('path');

const app = express();

const products = require('./data/products');
const shopRoutes = require('./routes/shop.routes');
const logger = require('./middleware/logger.middleware');

app.set('view engine', 'ejs');
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {

    res.render('pages/home', {
        title: 'ElectroMart',
        tagline: 'Your Online Electronics Store',
        products: products
    });

});

// Connect Shop Router
app.use('/shop', shopRoutes);

// 404 Error Handler
app.use((req, res) => {

    res.status(404).render('pages/404', {
        title: 'Page Not Found'
    });

});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
