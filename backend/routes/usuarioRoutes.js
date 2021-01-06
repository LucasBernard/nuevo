const router = require("express").Router();
const Usuario = require('../model/Usuario')


router.post('/Registro', async (req,res) =>{
 const usuario = new Usuario({nombre:req.body.nombre,apellido:req.body.apellido,contrasena:req.body.contrasena,carrera:req.body.carrera,correo:req.body.correo,telefono:req.body.telefono,Dueñogrupos:Array})
 usuario.save()
 res.json(usuario)

});

router.post('/Login',async (req,res) => {
    const usuario = await Usuario.findOne({correo:req.body.correo} )
    if (usuario.contrasena == req.body.contrasena){
        return res.send({correo:usuario.correo})
    }
})

router.get("/Perfil", async (req, res) => {
    const perfil = await Usuario.findOne({correo:req.headers.correo})
        console.log(req.headers.correo)
        console.log(perfil)
        res.send(perfil)
    });
    
module.exports = router;