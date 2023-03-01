const { getAllIndoor, getAllOutdoor } = require('./controllers');

const allIndoor = getAllIndoor();;
const allOutdoor = getAllOutdoor();
console.log(allIndoor);
