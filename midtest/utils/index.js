import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secretKey = process.env.SECRETKEY

const token = {
    generateTk: (data) => {
        return jwt.sign(data, secretKey, {
            expiresIn: '1h'
        })
    },
    verifyTk: (token) => {
        return jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT verification failed:', err.message)
                throw new Error(err.message)
            } else {
                return decoded
            }
        })
    }
}

export {
    token
}