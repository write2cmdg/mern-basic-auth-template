import asyncHandler from 'express-async-handler'


//Desc: Auth user / set Token
//Method: POST
//route: api/users/auth
//Access: public
const authUser = asyncHandler(async (req, res) => {
    // res.status(401);
    // throw new Error('Something went wrong') 

    res.status(200).json({message:'Auth User'})
})


//Desc: Register new user
//Method: POST
//route: api/users
//Access: public
const registerUser = asyncHandler(async (req, res) => {

    res.status(200).json({message:'Register User'})
})


//Desc: Logout user
//Method: POST
//route: api/users/logout
//Access: public
const logoutUser = asyncHandler(async (req, res) => {

    res.status(200).json({message:'Logout User'})
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