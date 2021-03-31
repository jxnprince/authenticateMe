const express = require("express");
const router = express.Router();

const db = require("../../db/models");
const {  Comment } = db;
const { asyncHandler } = require("../../utils/utils");


router.post("/:id", asyncHandler(async (req, res) => {
  const trackId = req.params.id;
  const { payload } = req.body;
  
  const comment = await Comment.create({
    body: payload.comment,
    userId: payload.userId,
    trackId,
  });
  return res.json({ comment });
})
);

// // (TEST)Get every comment
// router.get("/",asyncHandler(async (req, res) => {
//     const comments = await Comment.findAll();
//     return res.json({comments});
//   })
// );

//All comments for one track
router.get("/:trackId", asyncHandler(async (req, res) => {
  const trackId = parseInt(req.params.trackId);
  const comments = await Comment.findAll({where: { trackId: trackId } });
  return res.json({ comments });
})
);

//Post a comment
router.post("/:id", asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const { payload } = req.body;
    const comment = await Comment.create({
      body: payload.comment,
      userId: payload.userId,
      trackId,
    });

    return res.json({ comment });
  })
);

//delete a comment?
router.post("/delete/:id", asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);
  await Comment.destroy({ where: { id: id } });
  return res.json({ status: req.params.id });
})
);

module.exports = router;