import jwt from 'jsonwebtoken';
import { JWT_Secret } from './config.js';

export function authMiddleware(req ,res, next){
      const token = req.headers.authorization;

      if (!token || !token.startsWith('Bearer ')) {
        res.status(403).json({
        });
    }

      const words= token.split(" ");
      const jwtToken= words[1]; 
      
      try {
        const decoded = jwt.verify(jwtToken, JWT_Secret);
        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
      
}