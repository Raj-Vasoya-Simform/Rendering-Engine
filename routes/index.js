const path = require("path");

const express = require("express");

const router = express.Router();


router.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "Handlebar",
  });
});

exports.routes = router;
