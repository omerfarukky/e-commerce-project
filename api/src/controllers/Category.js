const httpStatus = require("http-status");
const { list, insert, modify, deleteCategory } = require("../services/Category");

const index = (req, res) => {
  list()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const create = (req, res) => {
  insert(req.body)
  .then((response) => {
    res.status(httpStatus.CREATED).send(response);
  })
  .catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  });
};

const update = (req, res) => {
  if (!req.params?.id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: "ID bilgisi eksik." });
  }
  modify(req.body, req.params.id)
    .then((updatedCategory) => res.status(httpStatus.OK).send(updatedCategory))
    .catch((error) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "Kayıt sırasında bir problem olustu." })
    );
};

const deleteCate = (req, res) => {
  if (!req.params?.id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: "ID bilgisi eksik." });
  }
  deleteCategory(req.params?.id)
		.then(deleteItem => {
			if(!deleteItem) {
				return res.status(httpStatus.NOT_FOUND).send({
					message : "Categori Bulunamdı."
				})
			}
			res.status(httpStatus.OK).send({message:"Categori silindi."})
		})
		.catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({err : "Silme sırasında bir hata oluştu."}))
};

module.exports = {
  index,
  create,
  update,
  deleteCate
};
