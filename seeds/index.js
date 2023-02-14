// const seedUser = require('./user-seeds');
// const seedPosts = require('./posts-seeds');
// const seedComments = require('./comments-seeds');

// const sequelize = require('../config/connection');

// const seedAll = async () => {
//     await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');

//     await seedUser();
//     console.log('\n----- USER SEEDED -----\n');

//     await seedPosts();
//     console.log('\n----- POSTS SEEDED -----\n');

//     await seedComments();
//     console.log('\n----- COMMENTS SEEDED -----\n');

//     process.exit(0);
//   };
  
//   seedAll();


  const sequelize = require('../config/connection');
  const { Posts, User, Comments} = require('../models');
  const postsSeedData = require('./postsSeedData.json');
  const userSeedData = require('./userSeedData.json');
  const commentsSeedData = require('./commentsSeedData.json');

  const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData);
  
    await Posts.bulkCreate(postsSeedData);
  
    await Comments.bulkCreate(commentsSeedData);

    process.exit(0);
  };

  seedDatabase();