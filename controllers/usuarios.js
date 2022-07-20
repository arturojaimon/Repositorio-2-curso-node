const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
    const {q, nombre, apiKey} = req.query
    res.json({
        msg: 'get api controlador',
        q,
        nombre,
        apiKey
    })
  }
const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'post api controlador'
    })
  }
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api controlador'
    })
  }
const usuariosPut = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'put api controlador',
        id
    })
  }
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete api controlador'
    })
  }

  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPatch,
      usuariosPut,
      usuariosDelete
  }