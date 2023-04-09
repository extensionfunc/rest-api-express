require('dotenv').config()
const express = require('express')
const app = express()
const usersRoutes = require('./routes/users')
const middlewaresLog = require('./middlewares/logs')
const upload = require('./middlewares/multer')

app.use(middlewaresLog)
app.use(express.json())
app.use('/assets', express.static('public/images'))

app.use('/users', usersRoutes)
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Success'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })

})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`)
})