import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            res.status(400).json({
                success: false,
                message: "Not Authorized"
            })
            
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            if (decoded === process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
                next()
            } else {
                res.status(400).json({
                    success: false,
                    message: "Not Authorized to access this route"
                })
                
            }
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
        
        
    }

}