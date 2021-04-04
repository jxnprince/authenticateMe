const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Song } = db;
const { asyncHandler, csrfProtection } = require("./utils.js");

router.get(
  "/:id",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id);
    return res.json({ song });
  })
);

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll({ limit: 12 });

    return res.json({
      songs,
    });
  })
);

module.exports = router;
