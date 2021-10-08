const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

/* GET home page. */
router.post("/createStore/:storeName", controller.writeFileStore);

router.post("/newFolder/", controller.createFolder);

router.post("/setCookie", controller.setCookie)



module.exports = router;
