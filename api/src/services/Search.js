const client = require("../config/elasticClient");

const list = async (data) => {
  return await client.search({
    index: "products",
    body: {
      query: {
        match: {
          "name": data,
        },
      },
    },
  });
};

module.exports = {
  list,
};
