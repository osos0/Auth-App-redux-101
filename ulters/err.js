export const errHandeler = (statusCode, messaget) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = messaget;
  return error;
};
