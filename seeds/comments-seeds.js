const { Comments } = require('../models');

const commentsData = [
    {
        commentBody: 'This is one of my favourite speeches ever!',
        userId: 3,
        postId: 1
    },
    {
        commentBody: 'I wish I could have wrote this speech...',
        userId: 2,
        postId: 2
    },
];

const seedUser = () => Comments.bulkCreate(commentsData);

module.exports = seedUser;