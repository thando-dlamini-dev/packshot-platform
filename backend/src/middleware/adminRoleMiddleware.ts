import { Request, Response, NextFunction } from 'express'
import {User} from "../passport.config";

const globalRoleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.user as User

    if(role !== 'admin') {
        res.status(401).send('Not authorized')
    }
    else{
        next()
    }
}

export default globalRoleMiddleware;