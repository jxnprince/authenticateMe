const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
// router.use("/songs", songRouter);
// router.use("/comment", commentRouter);


module.exports = router;