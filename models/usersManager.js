import { ObjectId } from 'mongodb';
import { connectDB } from '../config/db.js';

export async function getAllUsers() {
    const db = await connectDB();
    const users = await db.collection("users").find().toArray();
    return users;
}

export async function deleteUser(_id) {
    const db = await connectDB();
    const users = await db.collection("users");
    await users.deleteOne({ _id: new ObjectId(_id) });
    return { msg: "Deleted successfully" };
}

export async function updateUser(params) {
    const db = await connectDB();
    const users = await db.collection("users");

    const updateDoc = {
        $set: {
        id: params.id,
        firstname: params.firstname,
        lastname: params.lastname,
        mobile: params.mobile,
        email: params.email,
        dept: params.dept,
        address: params.address,
        password: params.password
        }
    };
    await users.findOneAndUpdate({ _id: new ObjectId(params._id) }, updateDoc);

    return { msg: "Updated successfully" };
}

export async function saveUser(params) {
    const db = await connectDB();
    const users = await db.collection("users");
    await users.insertOne({
        id: params.id,
        firstname: params.firstname,
        lastname: params.lastname,
        mobile: params.mobile,
        email: params.email,
        dept: params.dept,
        address: params.address,
        password: params.password
    });
    return { msg: "Saved successfully" };
}