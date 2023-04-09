const dbPool = require('../config/db')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbPool.query(SQLQuery)
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) 
                      VALUES ('${body.name}', '${body.email}', '${body.address}')`

    return dbPool.query(SQLQuery)
}

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE users 
                        SET name='${body.name}', email='${body.email}', address='${body.address}' 
                        WHERE id=${id} `
    return dbPool.query(SQLQuery)
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE from users WHERE id=${id}`
    return dbPool.query(SQLQuery)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}