const UserModels = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModels.getAllUsers()
        res.json({
            message: 'GET all users success',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
            data: null
        })
    }
}

const createNewUsers = async (req, res) => {
    const { body } = req

    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah'
        })
    }

    try {
        await UserModels.createNewUser(body)
        res.status(201).json({
            message: 'POST user success',
            body
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        await UserModels.updateUser(body, id)
        res.json({
            message: 'UPDATE user success',
            data: {
                id,
                ...body
            }
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            serverError: error
        })
    }

}

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await UserModels.deleteUser(id)
        res.json({
            message: 'Delete users success',
            data: null
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            serverError: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}