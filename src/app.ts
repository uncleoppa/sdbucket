import express from "express";
import cors from "cors";
import dotenv from "dotenv";

export default async() => {
    const app = express();
    app.set("port", 3000);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.get("/",
        (req, res, next) => {
            dotenv.config();
            console.log(process.env.LOG_LEVEL);
            res.status(200).send("test");
        }
    )
    return app;
}