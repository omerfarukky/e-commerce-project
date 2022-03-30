const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "products-service" },
  transports: [
    new winston.transports.File({
      filename: "src/logs/products/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "src/logs/products/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "src/logs/products/combined.log",
    }),
  ],
});

module.exports = logger;
