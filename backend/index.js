import express, { request } from "express";
import { PORT , MongoDb } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/bookRoutes.js";
import cors from 'cors';

const app = express();

//middleware for parsing requeset body
app.use(express.json());
//middleware for handling CORS policy
//option 1: allowing all origins with default of CORS(*)
app.use(cors());
//option 2 : allowing custom origins
// app.use(
//     cors({
//         origin : 'http://localhost:3000',
//         methods : ['GET','POST','PUT','DELETE'],
//         allowedHeaders : ['Content-Type'],
//     })
// );

app.get('/', (request,response) => {
   console.log(request);
   return response.status(234).send('Welcome to MERN website');
}),

app.use('/books',router);


// connect to MongoDb 
mongoose
  .connect(MongoDb)
  .then(()=>{
   console.log("app connected to database");
   app.listen(PORT , '127.0.0.1', () => {
    console.log(`Listening to port : ${PORT}`);
});
}).catch((error)=>{
   console.log(error);
});