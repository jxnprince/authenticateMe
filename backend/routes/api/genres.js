const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const { Genre } = db;
const { asyncHandler } = require("../../utils/utils");


//get all genres
router.get("/", asyncHandler(async (req, res) => {
  const genre = await Genre.findAll()
    if(genre)return res.json({ genre:genre });
  })
);

//get a specific genre
router.get("/:id", asyncHandler(async (req, res) => {
  const genreId = await parseInt(req.params.id, 10);
  const genre = await Genre.findOne({ where: { id: genreId }})
    if(genre)return res.json({ genre:genre });
  })
);

module.exports = router;