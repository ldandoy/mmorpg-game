const express               = require('express');
const cors                  = require('cors');
const bodyParser            = require('body-parser');
const helmet                = require('helmet');

const authRouter            = require('./routes/auth');
const userRouter            = require('./routes/user');
const petCategoryRouter     = require('./routes/pet_caterory');
const petRouter             = require('./routes/pet');
const sectorRouter          = require('./routes/sector');
const placeRouter           = require('./routes/place');

require('./models/Asso');

const PORT = 5000;
const server = express();

// For body encore url
server.use(express.urlencoded({extended: false}));

server.use(cors());

server.use(bodyParser.json());

server.use(helmet());

// Home Page
server.get('/', (req, res) => {
    res.send('ok');
});

// Auth page
server.use('/', authRouter);

// User part
server.use('/users', userRouter);

// petCategoryRouter
server.use('/pets-caterories', petCategoryRouter)

// Pet part
server.use('/pets', petRouter);

// Sector part
server.use('/sectors', sectorRouter);

// Place part
server.use('/places', placeRouter);

// Setting up the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

module.exports = server;