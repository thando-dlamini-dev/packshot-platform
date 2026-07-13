import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit"
import {NextFunction, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const rateLimit = new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(100, "15 m"),
    analytics: true,
});

export const globalLimiter = async (req:Request, res: Response, next: NextFunction) => {
    const identifier = (req.headers['cf-connecting-ip'] as string) || req.ip || 'unknown';
    const { success, limit, remaining, reset } = await rateLimit.limit(identifier);

    res.setHeader('RateLimit-Limit', limit.toString());
    res.setHeader('RateLimit-Remaining', remaining.toString());
    res.setHeader('RateLimit-Reset', reset.toString());

    if (!success) {
        return res.status(429).json({
            status: 429,
            error: "Too many requests, please try again later.",
        });
    }

    next();
}

//Limit to 5 requests per minute for authentication
export const authLimiter = async () => {

}