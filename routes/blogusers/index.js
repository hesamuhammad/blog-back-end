const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

router.get("/", require("./controller").getAll);
router.get("/id/:id", require("./controller").getById);

router.post("/", upload.single("avatar"), require("./controller").postData);
router.post("/login", require("./controller").login);

module.exports = router;
