
const asyncHandler = fn => (req, res, next) =>
      Promise.resolve(fn(req, res, next)).cacth(next);

module.exports = asyncHandler;
