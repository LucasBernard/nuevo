const router = require("express").Router();
const Usuario = require('../model/Usuario');

router.post('/Principal',async (req,res) => {
    const usuario = await Usuario.findOne({correo:req.body.headers.correo} )
    console.log(req.body.headers.correo)
    res.send(usuario.correo)
})

module.exports = router;