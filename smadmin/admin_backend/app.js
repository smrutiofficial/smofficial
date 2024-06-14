import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.route.js";
import authRouter from "./router/auth.route.js";
import {errorHandler} from "./middlewares/error.middleware.js"
const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
//app.get('/',userRouter);
//app.get('/',userRouter);
app.use(errorHandler)


app.listen(8000,()=>{
  console.log("server is listing on port 8000")
})
export {app};
