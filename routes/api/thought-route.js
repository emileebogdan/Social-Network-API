// similar to user route
const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,

} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router
