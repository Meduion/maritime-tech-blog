const User = require('./User');
const Posts = require('./Posts');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(User);

module.exports = { User, Posts };