module.exports = (req, res, next) => {
  console.log('method: ', req.method, ' query param:', req.query, 'params:', req.params, 'body:', req.body);
  next();
}
