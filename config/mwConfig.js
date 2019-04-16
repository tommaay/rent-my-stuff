const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const exhb = require('express-handlebars');

module.exports = server => {
    server.use(helmet());
    server.use(express.static('api/docs'));
    server.use(express.json());
    server.use(morgan('short'));
    server.use(cors());

    // Handlebars Middleware
    server.engine('handlebars', exhb({ defaultLayout: 'main' }));
    server.set('view engine', 'handlebars');

    // Body Parser Middleware
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    // Set Static Folder
    server.use(express.static(`${__dirname}/public`));
};
