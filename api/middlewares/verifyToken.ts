const jsonwebtoken = require("jsonwebtoken");


const verifyToken = (req: any, res: any, next: any) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).json({message: "Access denied"});
    }
    try {
        const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({message: "Invalid token"});
    }
}


const verifyTokenAndAdmin = (req: any, res: any, next: any) => {
 
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).json({message: "Access denied"});
    }
    try {
        const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        
        if (user.admin) {
            req.user = user;
            next();
        }
        else {
            res.status(403).json({message: "You are not allowed to do that"});
        }
    } catch (err) {
        res.status(400).json({message: "Invalid token"});
    }

}


export  {verifyToken, verifyTokenAndAdmin}