import express from 'express';
const router = express.Router();
import {noteController} from '../controllers/noteController.js';

router.get("/", noteController.showIndex.bind(noteController));
router.get("/notes", noteController.showCreate.bind(noteController));
router.post("/notes", noteController.createNote.bind(noteController));
router.get("/notes/edit/:id/", noteController.editNote.bind(noteController));
router.post("/notes/edit/:id/", noteController.updateNote.bind(noteController));
router.post("/notes/delete/:id/", noteController.deleteNote.bind(noteController));

//sorting routes
router.get("/sortedByDate", noteController.showSortedByDate.bind(noteController));
router.get("/sortedByRating", noteController.showSortedByRating.bind(noteController));
router.get("/sortedByCreateDate", noteController.showSortedByCreateDate.bind(noteController));
router.get("/hiddenFinished", noteController.showNotFinished.bind(noteController));

export const noteRoutes = router;
