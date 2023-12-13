const db = require('../db');

const isValidEmail = (value) => { return (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(value)) };

const isValidpassword = (value) => { return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(value)) };

//===================== Checking that there is something as Input =====================//

const checkInputsPresent = (value) => { return (Object.keys(value).length > 0) };

const createUserData = async (req, res) => {

    try {

        // Here we are creating user table if not exists;

        const createTableUsers = `CREATE TABLE IF NOT EXISTS users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            confirmPassword VARCHAR(255) NOT NULL,
            create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        const [result] = await db.promise().query(createTableUsers);

        console.log('Users table created successfully');

        // Checking req body if empty;

        if (!checkInputsPresent(req.body)) return res.status(400).send({ status: false, message: "No data found from body! You need to put the Mandatory Fields" });

        // data destructuring;

        console.log(req.body);

        let { firstname, lastname, username, email, password, confirmPassword } = req.body;
 
        // checking password with confirm password;

        if (password !== confirmPassword) return res.status(400).send({ status: false, msg: 'Passwords do not matched try again' });

        // checking email validation;

        if (!isValidEmail(email)) return res.status(400).send({ status: false, msg: 'Please Correct the Email Format' });

        // checking valid password;

        if (!isValidpassword(password)) return res.status(400).send({ status: false, msg: 'Please Enter Strong Password' });

        // checking email and username if duplicate;

        const emailCheckQuery = `SELECT email, username FROM users WHERE email = ? OR username = ?`;

        const [isEmail] = await db.promise().query(emailCheckQuery, [email, username]);

        if (isEmail.length > 0 && isEmail[0].username == username) return res.status(400).send({ status: false, msg: 'Username already exist' });

        if (isEmail.length > 0) return res.status(400).send({ status: false, msg: 'Email already exist' });

        //===================== Encrept the password by thye help of Bcrypt =====================//

        const insertQuery = 'INSERT INTO users (firstname, lastname, username, email, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?)';

        const values = [firstname, lastname, username, email, password, confirmPassword];

        const [results] = await db.promise().query(insertQuery, values);

        if (results.affectedRows === 1) {
            return res.status(200).send({ status: true, msg: 'User Profile Created Successfully' });
        };

    } catch (error) {

        console.error('Error creating users table:', error);

        return res.status(500).send({ status: false, msg: error.message })
    };
};

// Export the functions;

module.exports = {
    createUserData
};