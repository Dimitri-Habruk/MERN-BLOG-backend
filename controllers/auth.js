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
    } catch (error){

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