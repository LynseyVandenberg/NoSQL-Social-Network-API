const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router
    .route('/:userId/:thoughtId/:reactionId')
    .put(createReaction)
    .delete(deleteReaction);

module.exports = router;
