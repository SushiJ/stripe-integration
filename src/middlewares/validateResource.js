const validate = (schema) => (req, res, next) => {
  try {
    schema.validate({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    next();
  } catch (e) {
    return res.status(400).send(e.error);
  }
};

export default validate;
