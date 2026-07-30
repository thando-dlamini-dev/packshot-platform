import express from 'express'
import cors from "cors";
import dotenv from "dotenv"
import morgan from "morgan"
import userRoute from "./routes/user.route"
import { globalLimiter } from "./middleware/rateLimitMiddleware";
import blogRoute from "./routes/blog.route";
import authRoute from "./routes/auth.route";


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

// Logging: Log HTTP requests in 'dev' format
app.use(morgan('dev'));

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
app.use('/api/users', userRoute)
app.use('/api/blogs', blogRoute)
app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Started at ${Date()}`);
});