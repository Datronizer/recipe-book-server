// const mongoose = require("mongoose");
// const db =
//   "mongodb+srv://logrocket:<password>@cluster1.dydb2rf.mongodb.net/?retryWrites=true&w=majority";
// /* Replace <password> with your database password */

// mongoose.set("strictQuery", true, "useNewUrlParser", true);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(db);
//     console.log("MongoDB is Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };
// module.exports = connectDB;

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DB}.mongodb.net/?retryWrites=true&w=majority`;

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);