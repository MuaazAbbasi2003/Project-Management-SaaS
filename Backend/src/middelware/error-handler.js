const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
      success: err.success,
      data: err.data,
    });
  } else if (err.name === "ValidationError") {
    let arr = [];
    for (const object of Object.values(err.errors)) {
      const obj = {
        field: object.path,
        message: object.message,
      };
      arr.push(obj);
    }

    res.status(400).json({
      statusCode: 400,
      message: "Database validation failed",
      errors: arr,
      success: false,
      data: null,
    });
  } else if (err.code === 11000) {
    res.status(409).json({
      statusCode: 409,
      message: "Resource already exists",
      errors: [],
      success: false,
      data: null,
    });
  } else {
    console.error(err);
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
