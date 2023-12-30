const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

const uploadFile = require('../aws/config');

const validator = require('../validator/validator');

const bcrypt = require('bcryptjs');

const saltRounds = 10;

const createUser = async (req, res) => {

    try {

        let data = req.body;

        console.log(data);

        let files = req.files

        console.log(files);

        //===================== Destructuring User Body Data =====================//

        let { name, email, phone, password, ...rest } = data

        //===================== Checking User Body Data =====================//
        if (!validator.checkInputsPresent(data)) return res.status(400).send({ status: false, message: "No data found from body! You need to put the Mandatory Fields (i.e. name, email, profileImage, phone, password). " });
        if (validator.checkInputsPresent(rest)) { return res.status(400).send({ status: false, message: "You can input only name, email, profileImage, phone, password ." }) }


        //===================== Validation of Data =====================//
        if (!validator.isValidBody(name)) { return res.status(400).send({ status: false, message: 'Please enter name' }) }

        //===================== Validation email || phone =====================//

        if (!email && !phone) {
            return res.status(400).send({
                status: false, message: 'Please fill your phone or emailId'
            })
        };

        if (!validator.isValidName(name)) { return res.status(400).send({ status: false, message: 'name should be in Alphabets' }) }

        if (email && !validator.isValidEmail(email)) { return res.status(400).send({ status: false, message: 'Please enter valid emailId' }) }
        if (phone && !validator.isValidMobileNumber(phone)) { return res.status(400).send({ status: false, message: 'Please enter valid Mobile Number' }) }

        if (!validator.isValidBody(password)) { return res.status(400).send({ status: false, message: 'Please enter the password' }) }
        if (!validator.isValidpassword(password)) { return res.status(400).send({ status: false, message: "To make strong Password Should be use 8 to 15 Characters which including letters, atleast one special character and at least one Number." }) }


        //===================== Encrept the password by thye help of Bcrypt =====================//
        data.password = await bcrypt.hash(password, saltRounds)


        //===================== Fetching data of Email from DB and Checking Duplicate Email or Phone is Present or Not =====================//

        const isDuplicateEmail = await User.findOne({ $or: [{ email: email }, { phone: phone }] })
        if (isDuplicateEmail) {
            if (isDuplicateEmail.email == email) { return res.status(400).send({ status: false, message: `This EmailId: ${email} is already exist!` }) }
            if (isDuplicateEmail.phone == phone) { return res.status(400).send({ status: false, message: `This Phone No.: ${phone} is already exist!` }) }
        }


        //===================== Checking the File is present or not and Create S3 Link =====================//

        if (files && files.length > 0) {

            if (files.length > 1) return res.status(400).send({ status: false, message: "You can't enter more than one file for Create!" })
            if (!validator.isValidImage(files[0]['originalname'])) { return res.status(400).send({ status: false, message: "You have to put only Image." }) }

            data.profileImage = await uploadFile(files[0])
        }
        else {
            return res.status(400).send({ msg: "Please upload image to create signup!" })
        }


        //===================== Final Creation of User =====================//

        let userCreated = await User.create(data)

        return res.status(201).send({ status: true, message: "User signed up successfully", data: userCreated })

    } catch (error) {
        return res.status(500).send({ status: false, error: error.message })
    }
}

//===================== This function is used for Login the User =====================//

const userLogin = async function (req, res) {

    try {

        let data = req.body

        //===================== Destructuring User Body Data =====================//
        let { email, phone, password, ...rest } = data;

        if (!email && !phone) {
            return res.status(400).send({
                status: false, message: 'Please fill your phone or emailId'
            })
        };

        //=====================Checking User input is Present or Not =====================//
        if (!validator.checkInputsPresent(data)) return res.status(400).send({ status: false, message: "You have to input email and password." });
        if (validator.checkInputsPresent(rest)) { return res.status(400).send({ status: false, message: "You can enter only email and password." }) }

        //=====================Checking Format of Email & Password by the help of Regex=====================//

        if (email && !validator.isValidEmail(email)) { return res.status(400).send({ status: false, message: "Invalid EmailID Format or Please input all letters in lowercase." }) }

        if (phone && !validator.isValidMobileNumber(phone)) { return res.status(400).send({ status: false, message: 'Please enter valid Mobile Number' }) }


        if (!validator.isValidBody(password)) return res.status(400).send({ status: false, message: "Password required to login" })
        if (!validator.isValidpassword(password)) { return res.status(400).send({ status: false, message: "Invalid Password Format! Password Should be 8 to 15 Characters and have a mixture of uppercase and lowercase letters and contain one special character." }) }

        //===================== Fetch Data from DB =====================//
        const userData = await User.findOne({ $or: [{ email: email }, { phone: phone }] })
        if (!userData) { return res.status(401).send({ status: false, message: "Invalid Login Credentials! You need to register first." }) }

        //===================== Decrypt the Password and Compare the password with User input =====================//
        let checkPassword = await bcrypt.compare(password, userData.password)

        if (checkPassword) {

            let payload = {
                userId: userData['_id'].toString(),
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                isAdmin: userData.isAdmin
            }

            const token = jwt.sign({ payload }, "innovation-backend-task", { expiresIn: "2d" });

            //=====================Create a Object for Response=====================//
            let obj = { userId: userData['_id'], token: token };

            req.headers['authorization'] = token;

            return res.status(200).send({ status: true, message: 'User logged in successfully', data: obj })

        } else {

            return res.status(400).send({ status: false, message: 'Wrong Password' })
        }

    } catch (error) {

        return res.status(500).send({ status: false, error: error.message })
    }
}

//===================== This function is used for Get Data of User =====================//

const getUser = async function (req, res) {

    try {

        let userId = req.params.userId;

        //x=====================Fetching All Data from Book DB=====================x//

        let getUser = await User.findOne({ _id: userId })

        if (!getUser) return res.status(404).send({ status: false, message: "User Data Not Found" })

        return res.status(200).send({ status: true, message: "User profile details", data: getUser })

    } catch (error) {

        return res.status(500).send({ status: false, message: error.message })
    }
}

//===================== This function is used for Update the User =====================//

const updateUserData = async function (req, res) {

    try {

        let data = req.body
        let files = req.files
        let userId = req.params.userId

        //===================== Destructuring User Body Data =====================//
        let { name, email, phone, password, ...rest } = data

        //=====================Checking User input is Present or Not =====================//
        if (!(validator.checkInputsPresent(data)) && !(files)) return res.status(400).send({ status: false, message: "Atleast one field required for Update(name or email or profileImage or phone or password)!" });
        if (validator.checkInputsPresent(rest)) { return res.status(400).send({ status: false, message: "You can enter only name or email or profileImage or phone or password." }) }


        //===================== Create a Object =====================//
        let obj = {}

        //===================== Validation of Given Credentials of User and Store the value in OBJ =====================//
        if (name) {
            if (!validator.isValidName(name)) { return res.status(400).send({ status: false, message: 'name should be in Alphabets' }) }
            obj.name = name
        }
        if (email) {
            if (!validator.isValidEmail(email)) { return res.status(400).send({ status: false, message: 'Please enter valid emailId' }) }
            obj.email = email
        }
        if (phone) {
            if (!validator.isValidMobileNumber(phone)) { return res.status(400).send({ status: false, message: 'Please enter valid Mobile Number' }) }
            obj.phone = phone
        }
        if (password) {
            if (!validator.isValidpassword(password)) { return res.status(400).send({ status: false, message: "password should be have minimum 8 character and max 15 character" }) }
            obj.password = await bcrypt.hash(password, saltRounds)
        }

        //===================== Checking the File is present or not and Create S3 Link =====================//
        if (files && files.length > 0) {
            if (files.length > 1) return res.status(400).send({ status: false, message: "You can't enter more than one file for Update!" })
            if (!validator.isValidImage(files[0]['originalname'])) { return res.status(400).send({ status: false, message: "You have to put only Image." }) }
            let uploadedURL = await uploadFile(files[0])
            obj.profileImage = uploadedURL
        };

        //===================== Final Updation of User Document =====================//
        let updateUser = await User.findOneAndUpdate({ _id: userId }, { $set: obj }, { new: true })

        if (!updateUser) { return res.status(404).send({ status: true, message: "User not exist with this UserId." }) }


        return res.status(200).send({ status: true, message: "User profile updated", data: updateUser })

    } catch (error) {

        return res.status(500).send({ status: false, message: error.message })
    }
}


const deleteUser = async (req, res) => {

    try {

        let userId = req.params.userId;

        //===================== Fetching All User Data from Product DB then Update the value of isDeleted from false to true =====================//
        let deletedUser = await User.findOneAndUpdate({ isDeleted: false, _id: userId }, { isDeleted: true, deletedAt: Date.now() })

        //===================== Checking the User is Present or Not =====================//
        if (!deletedUser) { return res.status(404).send({ status: false, message: "User is not found or Already Deleted!" }) }

        return res.status(200).send({ status: true, message: "User Successfully Deleted." })

    } catch (error) {

        return res.status(500).send({ status: false, message: error.message })
    }
}


//===================== Module Export =====================//
module.exports = { createUser, userLogin, getUser, updateUserData, deleteUser }