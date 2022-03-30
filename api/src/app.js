const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const config = require("./config");
const loaders = require("./loaders");
const events = require("./scripts/events");
const path = require("path");
const { ProductRoute, SearchRoute,CategoryRoute,UserRoute } = require("./api-routes");

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));
app.use(cors());
app.use(express.json());
app.use(fileUpload());

config();
loaders();
events();

app.use("/products", ProductRoute);
app.use("/search", SearchRoute);
app.use("/category", CategoryRoute);
app.use("/users", UserRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`${process.env.APP_PORT} run`);
});
