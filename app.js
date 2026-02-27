import express from 'express';
import cors from 'cors';
import usersRouter from './controllers/usersController.js';



const app = express();
app.use(cors()); // Enabling Cross Origin
app.use(express.json());

app.use("/users", usersRouter); //Register the controller

app.get("/", (req, res)=>{
    res.json({msg: "Hello World from app.js"});
});

app.listen(5000, ()=>{
    console.log("Server is running on http://localhost:5000");
});