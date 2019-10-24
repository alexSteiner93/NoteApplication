import express from 'express';
const router = express.Router();
import {noteController} from '../controllers/noteController.js';

router.post('/', function(req, res) {
    noteController.setSessionParameters(req.session, req.body);
    noteController.all(req, res);
});

router.get('/', function(req, res) {
    console.log("GET /notes");
    noteController.setSessionParameters(req.session, req.body);
    noteController.all(req, res);
});


router.get("/new", noteController.showCreate.bind(noteController));
router.post("/new", noteController.createNote.bind(noteController));
router.get("/edit/:id/", noteController.editNote.bind(noteController));
router.post("/edit/:id/", noteController.updateNote.bind(noteController));
router.post("/delete/:id/", noteController.deleteNote.bind(noteController));

//sorting routes
router.get("/sortedByDate", noteController.showSortedByDate.bind(noteController));
router.get("/sortedByRating", noteController.showSortedByRating.bind(noteController));
router.get("/sortedByCreateDate", noteController.showSortedByCreateDate.bind(noteController));
router.get("/hiddenFinished", noteController.showNotFinished.bind(noteController));

export const noteRoutes = router;
