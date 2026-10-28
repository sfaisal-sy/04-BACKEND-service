import dotenv from "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

connectDB();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`03 - PORT IS RUNNING AT PORT ${PORT} `)
});