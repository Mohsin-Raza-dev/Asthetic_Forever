
import bcrypt from "bcrypt"
import validator from "validator"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "All fields are required"
            })
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "User does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            res.status(200).json({
                success: true,
                message: "Login Successful",
                token

            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Username or password incorrect"
            })

        }

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        })
        
    }
}

export const registerUser = async (req, res) => { 
    try {
        const { name, email, password } = req.body
        
        if (!name || !email || !password) {
            return res.status(400).json({
                status: 400,
                message: "All fields are required"
            })
        }

        const userExists = await userModel.findOne({ email })

        if (userExists) {
            return res.json({
                success: false,
                message: "User already exists"
            })
            
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
              success: false,
              message: "Please enter a valid email",
            });
            
        }

        if(password.length < 8) {
            return res.status(400).json({
              success: false,
              message: "Password must be at least 8 characters",
            });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)

        res.status(201).json({
            status: 201,
            message: "User created successfully",
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}


export const adminLogin = async (req, res) => { 
    try {

        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD === password) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.status(200).json({
                success: true,
                message: "Login successful",
                token
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
}