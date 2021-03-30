const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const {  Comment } = db;
const { asyncHandler } = require("./utils.js");


router.post("/:id", asyncHandler(async (req, res) => {
  const trackId = req.params.id;
  const { payload } = req.body;xw
  
  const comment = await Comment.create({
    body: payload.comment,
    userId: payload.userId,
    trackId,
  });
  return res.json({ comment });
})
);

router.get("/",asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json({comments});
  })
);

//Comments for one track
router.get("/:id", asyncHandler(async (req, res) => {
  const trackId = parseInt(req.params.id);
  const comments = await Comment.findAll({where: { trackId: trackId } });
  return res.json({ comments });
})
);

//delete a comment?
router.post("/delete/:id", asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  await Comment.destroy({ where: { id } });
  return res.json({ status: req.params.id });
})
);

module.exports = router;