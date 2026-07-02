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
app.set('trust proxy', true);

//Rate Limiting

app.use(globalLimiter)
app.use((req, res, next) => {
    // express-rate-limit passes remaining requests in the headers
    const remaining = res.getHeader('RateLimit-Remaining');
    const limit = res.getHeader('RateLimit-Limit');

    if (limit) {
        console.log(`[TRAFFIC MONITOR] IP: ${req.ip} has used ${Number(limit) - Number(remaining)}/${limit} requests.`);
    }
    next();
});

//Routes
app.use('api/users', userRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Started at ${Date()}`);
});