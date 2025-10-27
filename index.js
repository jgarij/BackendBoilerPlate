import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";


connectDB();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});
app.use("/api", userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

