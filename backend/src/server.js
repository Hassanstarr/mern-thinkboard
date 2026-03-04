// npm install nodemon -D //The -D flag in npm install nodemon -D means you are installing nodemon as a development dependency.

// const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import cors from "cors"
import path from "path";

import { connectDB } from './config/db.js';
import notesRouter from "./routes/notesRoutes.js";
import rateLimiter from './middleware/rateLimiter.js';

import dns from "dns";
// Force Node to use Google/Cloudflare DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//middleware
if(process.env.NODE_ENV !== "production"){
  app.use(cors({
    origin:"http://localhost:5173",
  }));
}
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter)

// our simple custom middleware
// app.use(
//   (req,res,next) => {
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//     next();
//   }
// );

app.use("/api/notes", notesRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Only when DB connect do we want our app to run, if it failed then app won't run this way
// We want app to run after the database is connected (it takes some time to connect to database then run the server)
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
});

