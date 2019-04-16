const express = require('express');
const server = express();
const keys = require('../config/keys');
const mwConfig = require('../config/mwConfig');
const stripe = require('stripe')(keys.stripeSecretKey);

mwConfig(server);

server.get('/', (req, res) => {
    res.render('index', {
        stripePublishableKey: key.stripePublishableKey,
    });
});

server.post('/charge', (req, res) => {
    console.log(req.body);

    const amount = 1200;

    stripe.customers
        .create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
        })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: 'Web Development Ebook',
                currency: 'usd',
                customer: customer.id,
            })
        )
        .then(charge => res.render('success'));
});

module.exports = server;
