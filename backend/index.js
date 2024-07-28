import express from "express";
import {router} from "./routes/index.js"
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1',router);


app.listen(port,()=>{
    console.log(`Listening on ${port}`)
});



