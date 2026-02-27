import express from 'express';
import { deleteUser, getAllUsers, saveUser, updateUser } from '../models/usersManager.js';

const router = express.Router();

router.get("/getallusers", async (req, res)=>{
    const users = await getAllUsers();
    res.json(users);
});

router.delete("/deleteuser/:_id", async (req, res)=>{
    const users = await deleteUser(req.params._id);
    res.json(users);
});

router.put("/updateuser", async(req, res)=>{
    const users = await updateUser(req.body);
    res.json(users);
});

router.post("/saveuser", async(req, res)=>{
    const users = await saveUser(req.body);
    res.json(users);
});

export default router;