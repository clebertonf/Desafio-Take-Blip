module.exports = (err, _req, res, _next) => {
  if (err.isBoom) {
    const { output: { payload: { statusCode, message } } } = err;
    return res.status(statusCode).json({ message });
  }
  
  res.status(501).json({ message: err.message });
};
