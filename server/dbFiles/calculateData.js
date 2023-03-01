const { getAllIndoor, getAllOutdoor } = require('./controllers');

const allIndoor = getAllIndoor()
  .then(data => console.log(data));
const allOutdoor = getAllOutdoor();
console.log(allIndoor);
