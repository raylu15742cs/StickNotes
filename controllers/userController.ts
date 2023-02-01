import User from "../models/User"
import Note from "../models/Note"
import asyncHandler from "express-async-handler"
import bcrpt from 'bcrypt'

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req,res) => {

})

// @desc Create a user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req,res) => {
    
})

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req,res) => {
    
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req,res) => {
    
})

module.exports = { getAllUsers , createNewUser , updateUser , deleteUser}