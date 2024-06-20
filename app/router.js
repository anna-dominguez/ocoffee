const express = require("express");
const router = express.Router();

const {
  homePage,
  catalogPage,
  productPage,
  shopPage,
  contactPage,
} = require("./controllers/mainController");

const { sendEmail } = require("./controllers/contactController");

router.get("/", homePage);
router.get("/catalog", catalogPage);
router.get("/product/:id", productPage);
router.get("/shop", shopPage);
router.get("/contact", contactPage);
router.post("/contact", sendEmail);

module.exports = router;
