import passport, {Strategy} from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import db from "./postgres.config";
import { eq } from "drizzle-orm"
import users from "./db/schema/users";
import dotenv from "dotenv";

dotenv.config();

export interface User {
    id: number
    googleId: string
    email: string
    userName: string | null
    businessName: string | null
    avatarUrl: string | null
    role: string
}

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: `/api/auth/google/callback`
    },
    async (accessToken, refreshToken, profile, done) => {
        try{
            let dbUser = await db.select({
            }).from(users).where(eq(users.googleId, profile.id))

            if(dbUser.length === 0){

                const newUser = await db.insert(users).values({
                    googleId: profile.id,
                    email: profile.emails?.[0]?.value || "",
                    userName: profile.displayName,
                    avatarUrl: profile.photos?.[0].value || ""
                }).returning()

                return done(null, newUser[0] as User)
            }

            return done(null, dbUser[0] as User)
        }
        catch (err: any) {
            console.log("Error in passport-google config: ", err.cause.details)
            return done(err)
        }
    }
))

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET!,
}

passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
        if (jwtPayload) {
            return done(null, jwtPayload);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}))

export default passport;

