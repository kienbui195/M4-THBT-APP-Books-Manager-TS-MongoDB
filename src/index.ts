import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {webRouter} from "./routers/web.router";
import mongoose from "mongoose";

const app = express();
const port = 8080;
const DB_URL = "mongodb://localhost:27017"

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.json());
app.use('/', webRouter);

mongoose.connect(DB_URL)
    .then(() => console.log(`DB connected`))
.catch(err => console.log(err.message))

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})