var express = require("express");
var router = express.Router();

/*GET HomePage */
router.get("/", function (req, res) {
  res.render("index", { title: "OCT-App" });
});

module.exports = router;
