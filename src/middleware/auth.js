//===================== Importing Module and Packages =====================//
const JWT = require('jsonwebtoken')

const validator = require('../validator/validator')


//<<<===================== This function used for Authentication =====================>>>//

const Authentication = async (req, res, next) => {
    try {

        //===================== Check Presence of Key with Value in Header =====================//
        let token = req.headers['authorization'];

        if (!token) { return res.status(400).send({ status: false, message: "Token must be Present." }) }
        token = token.slice(7)
        //===================== Verify token & asigning it's value in request body =====================//
        JWT.verify(token, "innovation-backend-task", function (error, decodedToken) {
            if (error) {
                return res.status(401).send({ status: false, message: "Invalid Token." })
            } else {
                req.token = decodedToken
                next()
            }
        })

    } catch (error) {

        res.status(500).send({ status: false, error: error.message })
    }
}



//<<<=====================This function used for Authorisation(Phase II)=====================>>>//
const Authorization = async (req, res, next) => {

    try {

        //===================== Authorising with userId From Param =====================//
        let userId = req.params.userId

        //===================== Checking the userId is Valid or Not by Mongoose =====================//

        if (!validator.isValidObjectId(userId)) return res.status(400).send({ status: false, message: `Please Enter Valid UserId: ${userId}.` })


        let tokenUserId = req.token.payload.userId

        let isAdmin = req.token.payload.isAdmin

        if (isAdmin || userId == tokenUserId) {
            next()
        }
        else {
            return res.status(403).send({ status: false, message: "You are not Authorized to get User Details." })
        };

    } catch (error) {

        res.status(500).send({ status: false, error: error.message })
    }
}

//================================= Module Export ==============================================//

module.exports = { Authentication, Authorization }