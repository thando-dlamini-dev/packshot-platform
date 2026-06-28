import express from 'express'
import cors from "cors";
import dotenv from "dotenv"
import userRoute from "./routes/user.route"

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(cors());

app.use('', userRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Started at ${Date()}`);
});