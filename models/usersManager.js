import { ObjectId } from 'mongodb';
import { connectDB } from '../config/db.js';

export async function getAllUsers(){
    const db = await connectDB();
    const users = await db.collection("users").find().toArray();
    return users;
}

export async function deleteUser(_id){
    const db = await connectDB();
    const users = await db.collection("users");
    await users.deleteOne({_id: new ObjectId(_id)});
    return {msg: "Deleted successfully"};
}

export async function updateUser(params) {
    const db = await connectDB();
    const users = await db.collection("users");
    
    const updateDoc = {$set:{
                            firstname: params.firstname, 
                            lastname: params.lastname, 
                            mobile: params.mobile, 
                            email: params.email
                        }};
    await users.findOneAndUpdate({_id: new ObjectId(params._id)}, updateDoc);

    return {msg: "Updated successfully"};
}

export async function saveUser(params){
    const db = await connectDB();
    const users = await db.collection("users");
    await users.insertOne({
        firstname: params.firstname, 
        lastname: params.lastname, 
        mobile: params.mobile, 
        email: params.email,
        password: params.password
    });
    return {msg: "Saved successfully"};
}