const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const trackRouter = require('./tracks.js');
const commentRouter = require('./comments.js');
const genreRouter = require('./genres.js');

router.use('/session', sessionRouter);
router.use("/genres", genreRouter);
router.use('/users', usersRouter);
router.use("/tracks", trackRouter);
router.use("/comments", commentRouter);

module.exports = router;