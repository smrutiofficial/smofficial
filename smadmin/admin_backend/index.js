import connectDB from "./db/db.js";


connectDB()
    .then()
    .catch((err) => {
        console.log("mongo db connection failed !!!", err);
    })



