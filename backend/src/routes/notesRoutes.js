import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from "../controller/notesController.js";

const router = express.Router();


router.get("/",getAllNotes)
router.get("/:id", getNoteById)
router.post("/", createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)



// =======================================

// router.post("/", (req, res) => {
//     res.status(201).json({message:"Note created successfully!"})
// })

// router.put("/:id", (req, res)=>{
//     res.status(200).json({message:"Note updated successfully!"})
// })

// router.delete("/:id", (req,res)=>{
//     res.status(200).json({message:"Note deleted successfully!"})
// })

// =======================================

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("You got 10 notes");
// })

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({message:"Note created successfully!"})
// })

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({message:"Note updated successfully!"})
// })

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({message:"Note delete successfully!"})
// })

export default router