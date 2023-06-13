const db = require('../config/db');
const PlaygroundOwner = require('../models/PlaygroundOwners');
const Playground = require('../models/Playgrounds');
const FloorType = require('../models/FloorTypes');
const Utility = require('../models/Utilities');
const Customer = require('../models/Customers');
const Reservation = require('../models/Reservations');
const Review = require('../models/Reviews');

const { PlaygroundOwners, Playgrounds, Customers, Utilities, FloorTypes, Reservations, Reviews } = require('./data/data');

const seed = require('./seed');

const startSeeding = async () =>
{

    await seed(db, PlaygroundOwner, PlaygroundOwners);
    await seed(db, Playground, Playgrounds);
    await seed(db, FloorType, FloorTypes);
    await seed(db, Utility, Utilities);
    await seed(db, Customer, Customers);
    await seed(db, Reservation, Reservations)
    await seed(db, Review, Reviews)
    .then(() => { db.close(); process.exit(0);});
}

startSeeding();