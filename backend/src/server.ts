import express from 'express'
import cors from "cors";
import dotenv from "dotenv"
import userRoute from "./routes/user.route"
import { globalLimiter } from "./middleware/rateLimitMiddleware";


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(cors());

app.use(globalLimiter)

app.use('api/users', userRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Started at ${Date()}`);
});