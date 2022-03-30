const httpStatus = require("http-status");
const { list } = require("../services/Search");

const index = (req, res) => {
  list(req.query.name)
    .then((response) => {
      res.status(httpStatus.OK).send(response.hits.hits);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

module.exports = {
  index,
};
