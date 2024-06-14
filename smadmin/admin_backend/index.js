import connectDB from "./db/db.js";
import {app} from "./app.js";
connectDB()
    .then()
    .catch((err) => {
        console.log("mongo db connection failed !!!", err);
    })



