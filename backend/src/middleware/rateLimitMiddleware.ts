import { rateLimit } from "express-rate-limit"

//Limit to 100 requests per 15 minutes for global requests
export const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
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