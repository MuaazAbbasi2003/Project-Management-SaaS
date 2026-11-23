const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
      success: err.success,
      data: err.data,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      errors: [],
      success: false,
      data: null,
    });
  }
};

export default errorHandler;
