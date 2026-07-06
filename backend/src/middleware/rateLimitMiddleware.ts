import { rateLimit } from "express-rate-limit"
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit"
import redisStore, {RedisStore} from "rate-limit-redis"

const redisClient = Redis.fromEnv()

const ratelimit = new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(100, "15 m"),
    analytics: true,
});

//Limit to 100 requests per 15 minutes for global requests
export const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,

    keyGenerator: (req) => {
        return (req.headers['cf-connecting-ip'] as string) || req.ip || 'unknown';
    },

    store: new RedisStore({
        sendCommand: async (...args: string[]) => redisClient.
    }),

    message: {
        status: 429,
        error: "Too many requests, please try again later.",
    }
})

//Limit to 5 requests per minute for authentication
export const authLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
})