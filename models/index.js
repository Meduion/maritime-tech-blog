const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Posts, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
    foreignKey: 'userId'
});

Posts.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = { User, Posts, Comments };