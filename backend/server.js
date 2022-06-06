const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const router = require("./routes/routes.js");
const errorHandler = require("./middlewer/midle.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
app.use(errorHandler);

app.listen(port, () => console.log(`server runing ${port}`));
