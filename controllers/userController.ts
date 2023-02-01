import User from "../models/User"
import Note from "../models/Note"
import asyncHandler from "express-async-handler"
import bcrpt from 'bcrypt'

// @desc Get all users

// @route GET /users

// @access Private