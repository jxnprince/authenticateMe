const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Track } = db;
const { asyncHandler, csrfProtection } = require("./utils.js");

// router.get("/", csrfProtection, asyncHandler(async (req, res) => {
//     const tracks = await Track.findAll({limit: 5});
//     return res.json({ tracks });
//   })
// );

router.get("/:id", csrfProtection, asyncHandler(async (req, res) => {
    const track = await Track.findByPk(req.params.id);
    return res.json({ track });
  })
);


module.exports = router;
