const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./utils/Logger.js');
const db = require('./config/db');
const Authenticate = require('./middlewares/Auth');

const app = express();

app.use(express.json());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// enable cors
app.use(cors({
    origin: 'http://localhost:3000'
}));

// loggers
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms -  :body - :req[content-length]  - :res[content-length]'));


const version = 'v1';
const testPath = `/api/${version}/test`
const adminPath = `/api/${version}/admin`;

// routes
app.use(`${testPath}`, require('./routes/test.js'));
app.use(`${adminPath}/login`, require('./routes/Login.js'));
app.use(`${adminPath}/playgrounds`, Authenticate, require('./routes/Playgrounds.js'));
app.use(`${adminPath}/playgroundOwners`, require('./routes/PlaygroundOwners.js'));
app.use(`${adminPath}/customers`, require('./routes/Customers.js'));
app.use(`${adminPath}/reservations`, require('./routes/Reservations.js'));
app.use(`${adminPath}/profits`, require('./routes/Profits.js'));
app.use(`${adminPath}/floortypes`, require('./routes/FloorTypes.js'));
app.use(`${adminPath}/utilities`, require('./routes/Utilities.js'));
app.use(`${adminPath}/reviews`, require('./routes/Reviews.js'));



const PORT = process.env.PORT || 3000;
const filename = 'server.js';

app.listen(PORT, () => 
{    
    logger.log(filename, `Server Started at ${PORT} ...`);
})