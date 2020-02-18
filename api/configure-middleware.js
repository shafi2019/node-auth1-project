const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
    name: 'shafi',
    secret: 'keep it secret, keep it safe!',
    cookies: {
        maxAge: 1000 * 10,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(session(sessionConfig));
};
