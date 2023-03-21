import User from '../models/User.js'
import bcrypt from 'bcryptjs'

// Register user
export const register = async (req,res)=>{
    try{
        const {username, password} = req.body

        const isUser = await User.findOne({username})
        if(isUser){
            res.status(402).json({
                message: 'This username is already taken'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            password: hash,
        })

        await newUser.save()

        res.json({
            newUser, message : 'Succes! Registered successfully ! '
        })

    } catch (error){
        res.json({message: 'error, please wait or come later...'})
    }
}

// Login user
export const login = async (req,res)=>{
    try{

    } catch (error){
        
    }
}

// Get me
export const getMe = async (req,res)=>{
    try{

    } catch (error){
        
    }
}