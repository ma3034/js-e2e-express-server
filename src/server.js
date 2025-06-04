const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const utils = require('./utils');
const axios = require('axios');

// fn to create express server
const create = async () => {

    // server
    const app = express();
    app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
    
    // Log request
    app.use(utils.appLogger);

    // root route - serve static file
    app.get('/api/hello', (req, res) => {
        res.json({hello: 'goodbye'});
        res.end();
    });

    // API route for top 10 dogs
    app.get('/api/dogs', async (req, res) => {
        try {
            // Fetch 10 random dog images
            const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
            const images = response.data.message;
            // Extract breed name from image URL
            const dogs = images.map(url => {
                // Example URL: https://images.dog.ceo/breeds/labrador/n02099712_6853.jpg
                const match = url.match(/breeds\/([a-zA-Z0-9-]+)/);
                let name = 'Unknown';
                if (match && match[1]) {
                    name = match[1].replace(/-/g, ' ')
                        .replace(/\b\w/g, c => c.toUpperCase());
                }
                return { name, image: url };
            });
            res.json(dogs);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch dogs' });
        }
    });

    // root route - serve static file
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/client.html')));

    // Catch errors
    app.use(utils.logErrors);
    app.use(utils.clientError404Handler);
    app.use(utils.clientError500Handler);
    app.use(utils.errorHandler);

    return app;
};

module.exports = {
    create
};
