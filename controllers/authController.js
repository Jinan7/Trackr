import User from "../models/User.js"
import { StatusCodes } from "http-status-codes/build/cjs/status-codes.js";

const register = async (req, res, next) => {
    try{
        const user = await User.create(req.body)
        res.status(StatusCodes.OK).json({user})
    } catch {
        next(error)
    }
}

const login = async (req, res) => {
    res.send('login user')
}

const updateUser = async (req, res) => {
    res.send('update user')
}

export {register, login, updateUser}