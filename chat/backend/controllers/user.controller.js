const asyncHandler = require('express-async-handler');
const User = require("../model/user.model");
const jwtToken = require("../config/jwtToken");
const bcrypt = require("bcrypt");

// Register User
const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, password, pic } = req.body;

    // Validate input
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash the password and create the user
    bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
            res.status(500);
            throw new Error("Error hashing password");
        }
        
        const user = await User.create({
            name, email, password: hash, pic
        });

        if (user) {
            const token = jwtToken(user._id);
            if (token) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    pic: user.pic,
                    token
                });
            } else {
                res.status(500).json({ message: "try again later" });
            }
        } else {
            res.status(500);
            throw new Error("try again later");
        }
    });
});

// Authenticate User
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    const checkUser = await User.findOne({ email });
    if (checkUser) {
        // Compare the password with the stored hash
        bcrypt.compare(password, checkUser.password, (err, result) => {
            if (err) {
                res.status(500).json({ message: "Error comparing passwords" });
                return;
            }

            if (result) {
                const token = jwtToken(checkUser._id);
                res.status(200).json({
                    _id: checkUser._id,
                    name: checkUser.name,
                    email: checkUser.email,
                    pic: checkUser.pic,
                    token
                });
            } else {
                res.status(401).json({ message: "Invalid email or password" });
            }
        });
    } else {
        res.status(404).json({ message: "User does not exist, please sign up" });
    }
});

module.exports = { registerUser, authUser };
