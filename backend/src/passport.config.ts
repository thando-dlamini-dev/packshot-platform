import passport, {Strategy} from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import db from "./postgres.config";
import { eq } from "drizzle-orm"
import users from "./db/schema/users";

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
        try{
            let user = {
                id: profile.id,
                email: profile.emails?.[0]?.value || '',
                displayName: profile.displayName,
                accessToken,
                refreshToken
            };

            let dbUser = await db.select().from(users).where(eq(users.googleId, profile.id))
            if(!dbUser){
                await db.insert(users).values({
                    googleId: profile.id,
                    email: profile.emails?.[0]?.value || "",
                    userName: profile.displayName,
                    avatarUrl: profile.photos?.[0].value || ""
                })
            }

            return done(null, user)
        }
        catch (err) {
            console.log("Error in passport-google config", err)
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
        // jwtPayload contains the decrypted user data you signed earlier (e.g., id, email)
        // Optional: Fetch the full user from your database here if needed:
        // const user = await User.findById(jwtPayload.id);

        if (jwtPayload) {
            return done(null, jwtPayload); // This populates req.user with the payload
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}))

export default passport;

