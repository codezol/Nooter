const express = require('express');
const Note = require('../modules/Note');
const noteRoutes = require('../controllers/noteConrollers');

const router = express.Router();
// all Notes
router.get('/notes', noteRoutes.note_index);
router.get('/', (req, res) => {
    res.redirect('/notes');
})
// Note create get
router.get('/notes/create', noteRoutes.note_create_get);
// Note details
router.get('/notes/:id', noteRoutes.note_details);
// Note edit
router.get('/notes/:id');
// Note delete
router.delete('/notes/:id', noteRoutes.note_delete);
// Note create post
router.post('/notes', noteRoutes.note_create_post);

module.exports = router;
