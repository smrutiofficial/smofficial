// error.middleware.js
function errorHandler(err, req, res, next) {
    // Log the error for debugging
    console.error(err);
  
    // Set default error response
    const errorResponse = {
      success: false,
      statuscode: 500,
      message: 'An unexpected error occurred.'
    };
  
    // Customize the error message if available
    if (err.errorResponse && err.errorResponse.errmsg) {
      errorResponse.message = err.errorResponse.errmsg;
    }
  
    // Send the error response
    res.status(500).json(errorResponse);
  }
  
export {errorHandler};
  