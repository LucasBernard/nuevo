const router = require("express").Router();

const {Usuarios} = require("../models");

router.post('/Registro', async (req,res) =>{
  const user = await Usuarios.create({
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    contrasena : req.body.contrasena,
    carrera: req.body.carrera,
    correo : req.body.correo,
    telefono : req.body.telefono
  })
  return res.send(user)
  
})

router.post('/Login',async (req,res) =>{
      const user = await Usuarios.findOne({
        where: {
          correo: req.body.correo,
        },
      })
      if (req.body.contrasena == user.contrasena){
        return res.send({correo: user.correo,id: user.id})
      }
})

router.get("/Perfil", async (req, res) => {
    const perfil = await Usuarios.findOne({
      where: {
        id: req.body.id
      },
    });
    return res.send(perfil)
  })
router.get("/BuscarGrupos", async (req,res) =>{
  
})


module.exports = router;