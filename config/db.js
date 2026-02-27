import { MongoClient } from 'mongodb';

const url = "mongodb+srv://dhanasree02:dhanasree02@cluster0.ipq8tqd.mongodb.net/?appName=Cluster0";
const dbname = "fedf";

const client = new MongoClient(url);

let db;

export async function connectDB(){
    if(!db){
        await client.connect();
        db = client.db(dbname);
    }
    return db;
}