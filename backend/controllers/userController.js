import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//Desc: Auth user / set Token
//Method: POST
//route: api/users/auth
//Access: public
const authUser = asyncHandler(async (req, res) => {
const { email, password } = req.body
const user = await User.findOne({ email })

if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email
    })
} else {
    res.status(401)
    throw new Error('Invalid email or password')
}

})


//Desc: Register new user
//Method: POST
//route: api/users
//Access: public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


})


//Desc: Logout user
//Method: POST
//route: api/users/logout
//Access: public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message:'User has been logged out and cookies have been destroyed'})
})


//Desc: Get user profile
//Method: GET
//route: api/users/profile
//Access: private
const getUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({message:'User Profile'})
})


//Desc: Get user profile
//Method: PUT
//route: api/users/profile
//Access: private
const updateUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({message:'Update User Profile'})
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}