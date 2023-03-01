const db = require('./models.js');

const getAllIndoor = () => {
  return db.Indoor.find({})
}
const getAllOutdoor = () => {
  return db.Outdoor.find({})
}

// const getAll = () => {

// }


module.exports.getAllIndoor = getAllIndoor;
module.exports.getAllOutdoor = getAllOutdoor;
