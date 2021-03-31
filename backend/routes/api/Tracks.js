const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Track } = db;
const { asyncHandler, csrfProtection } = require("../../utils/utils");

router.get("/:id", csrfProtection, asyncHandler(async (req, res) => {
  const trackId = await parseInt(req.params.id, 10);
  const track = await Track.findOne({ where: { id: trackId }})
    if(track)return res.json({ track:track });
  })
);


module.exports = router;
