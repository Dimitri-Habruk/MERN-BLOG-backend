import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'

// Register user
export const register = async (req,res)=>{ 
    try{
        const {username, password} = req.body

        const isUser = await User.findOne({username})

        if(isUser){
            return res.json({
                message: 'This username is already taken'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            password: hash,
        })

        const token = jwt.sign({
            id: newUser._id
        },
        process.env.JWT_SECRET,
        {expiresIn: '30d'})

        await newUser.save()

        res.json({
            newUser, 
            token,
            message : 'Succes! Registered successfully ! '
        })

    } catch (error){
        res.json({message: 'error, user can not be registered.'})
    }
}

// Login user
export const login = async (req,res)=>{
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})

        if(!user){
            return res.json({
                message: "This user doesn't exist"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect){
            return res.json({
                message: 'password is incorrect'
            })
        } 

        const token = jwt.sign({
            id: user._id
        },
        process.env.JWT_SECRET,
        {expiresIn: '30d'})

        res.json({
            token,user,message :'You have successfully logged in'
        })

    } catch (error){
        res.json({message: 'Log in error'})
        
    }
}

// Get me = pour eviter la deconnection si on fait F5
export const getMe = async (req,res)=>{
    try{
        const user = await User.findById(req.userId)

        if(!user){
            return res.json({message: "This user doesn't exist."})
        }

        const token = jwt.sign({
            id: user._id
        },
        process.env.JWT_SECRET,
        {expiresIn: '30d'})

        res.json({user,token})        
    } catch (error){
        res.json({message: 'Access denied'})

    }
}