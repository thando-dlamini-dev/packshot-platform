import { Request, Response, NextFunction } from 'express'
import {User} from "../passport.config";

const globalRoleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User

    if(user === undefined){
        return res.status(401).send('Not authorized')
    }

    const role = user.role

    if(role !== 'admin') {
        return res.status(401).send('Only admin roles allowed')
    }
    else{
        next()
    }
}

export default globalRoleMiddleware;