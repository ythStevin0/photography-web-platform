/**
 * Global error-handling middleware.
 * Must have 4 parameters so Express recognises it as an error handler.
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.status ?? 500).json({
    error: err.message ?? "Internal Server Error",
  });
};

export default errorHandler;
