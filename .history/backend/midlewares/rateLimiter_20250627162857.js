import rateLimit from "express-rate-limit"

export const rateLimiter = rateLimit({
    limit:3,
    windowsMs: 15 * 60 * 1000,
    message:{
        success:false,
        message: "Too many login attempts. Please try again after 15 minutes."
    },
    standardHeaders: true,
    legacyHeaders: false,
})