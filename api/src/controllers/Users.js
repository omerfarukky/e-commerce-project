const httpStatus = require("http-status");
const { passwordToHash, generateAccessToken, genereteRefreshToken} = require("../scripts/utils/helper");
const { insert, listProducts, loginUser, modify } = require("../services/Users");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/eventEmitter");

const create = (req, res) => {
  console.log(req.body)
  req.body.password = passwordToHash(req.body.password);
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginUser(req.body)
    .then((user) => {
    user=user[0].dataValues
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "Kullanıcı bulunamadı" });
      }
      user = {
        ...user,
        tokens: {
          access_token: generateAccessToken(user),
          refresh_token: genereteRefreshToken(user),
        },
      };
      delete user.password;
      res.status(httpStatus.OK).send(user);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const productList = (req, res) => {
  listProducts( req.user.id )
    .then((projects) => {
      res.status(httpStatus.OK).send(projects);
    })
    .catch((error) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "Beklenmedik bir hata oluştu." });
    });
};

const resetPassword = (req, res) => {
  const new_password =
    uuid.v4()?.split("-")[0] || `usr-${new Date().getTime()}`;
  modify({ email: req.body.email }, { password: passwordToHash(new_password) })
    .then((updateUser) => {
      if (!updateUser)
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ error: "Kullanıcı bulunamdı." });
      eventEmitter.emit("send_email", {
        to: req.body.email, // list of receivers
        subject: "Sifre Sıfırlama", // Subject line
        html: `Talebiniz üzerine sifre sıfırlama islemi gerceklesmistir.
        </br> Sisteme giris yaptıktan sonra sifrenizi değiştimeyi unutmayınız
        </br> Yeni sifreniz : <b>${new_password}</b>`, // html body
      });
      res.status(httpStatus.OK).send({
        message:
          "Sifre sıfırlama islemi icin eposta adresinize gerekli bilgileri gönderdik.",
      });
    })
    .catch((error) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "Sifre sıfırlama sırasında bir problem oluştu" });
    });
};

const update = (req, res) => {
  modify({ id: req.user?.id }, req.body)
    .then((updateUser) => {
      res.status(httpStatus.OK).send(updateUser);
    })
    .catch((error) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "Güncelleştirme sırasında problem olustu" });
    });
};

module.exports = {
  create,
  login,
  productList,
  resetPassword,
  update,
};
