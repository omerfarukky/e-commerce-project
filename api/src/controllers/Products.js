const httpStatus = require("http-status");
const {list, insert, modify, productDetail, deleteProduct,} = require("../services/Products");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

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
  if (!req?.files?.product_image) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ error: "Resim eklenirken bir hata olustu" });
  }
  const imageName = uuid.v4()?.split("-")[0] || `usr-${new Date().getTime()}`;
  const extension = path.extname(req.files.product_image.name);
  const fileName = `${imageName}${extension}`;
  const folderPath = path.join(__dirname, "../", "uploads/products", fileName);
  req.files.product_image.mv(folderPath, function (err) {
    if (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: err });
    }
    console.log("resim yukleme basarılıdır");
  });
  req.body.image = fileName;
  req.body.userId = req.user.id;
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const categoryIndex = (req, res) => {
  list(req.query.category)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const detail = (req, res) => {
  productDetail(req.params.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
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
    .then((updatedProject) => res.status(httpStatus.OK).send(updatedProject))
    .catch((error) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "Kayıt sırasında bir problem olustu." })
    );
};

const deletePro = (req, res) => {
  if (!req.params?.id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: "ID bilgisi eksik." });
  }
  deleteProduct(req.params?.id)
    .then((deleteItem) => {
      if (!deleteItem) {
        return res.status(httpStatus.NOT_FOUND).send({
          message: "Silmeye Calıstıgınız Urun Bulunmamaktadır.",
        });
      }
      const deleteImage =
        __dirname + "/../uploads/products/" + deleteItem[0].dataValues.image;
      fs.unlinkSync(deleteImage);
      res.status(httpStatus.OK).send({ message: "Ürün silindi." });
    })
    .catch(() =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ err: "Silme sırasında bir hata oluştu." })
    );
};

module.exports = {
  index,
  create,
  update,
  detail,
  deletePro,
  categoryIndex,
};
