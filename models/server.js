const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        this.routes()
        this.middlewares()
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port) 
    }

    middlewares(){
        this.app.use(cors())
        this.app.use( express.static('public'))
        this.app.use(express.json())
    }

}

module.exports = Server