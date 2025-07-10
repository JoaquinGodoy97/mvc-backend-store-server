import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;
// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {

    console.log(req.headers, req.headers)
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    
    if(!authHeader){
        return res.status(401).json({ message: "No authorization header provided."})
    }

    const token = req.headers['authorization'].split(" ")[1]

    if (!token) return res.sendStatus(401); 

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.sendStatus(403);
        
        next();
    });
}