const jwt = require('jsonwebtoken');

const verifytoken = (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(400).send({
            sucess: false,
            message: 'Token Is Blanksss'
        })
    }
    let donetoken = token.split(' ')[1];
    jwt.verify(donetoken, "rw4", (error, decode) => {
        if (error) {
            return res.status(400).send({
                message: false,
                message: "Token Is Not Valid"
            })
        }
        req.user = decode;
        next();
    })
}

const rolebase = (role) => {
    return (req, res, next) => {
        if (req.user && role.includes(req.user.user.role)) {
            return next();
        }
        return res.status(200).send({
            sucess: false,
            message: "Only Admin Access"
        })
    }
}

module.exports = ({
    rolebase, verifytoken
})