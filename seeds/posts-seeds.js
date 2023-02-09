const { Posts } = require('../models');

const postData = [
    {
        title: 'The Gettysburg Address',
        body: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
        user_id: 1
    },
    {
        title: 'A Call to Arms',
        body: 'YESTERDAY, December 7, 1941 a date which will live in infamy the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.',
        user_id: 4
    },
];

const seedUser = () => Posts.bulkCreate(postData);

module.exports = seedUser;