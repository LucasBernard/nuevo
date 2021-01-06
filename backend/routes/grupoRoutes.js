const router = require("express").Router();
const Grupo = require('../model/Grupos')

router.post('/CrearGrupos', async (req,res) =>{
    const grupo = new Grupo({nombre:req.body.nombre,dueno:req.body.dueno,materia:req.body.materia,integrantes:[req.body.integrantes]})
    grupo.save()
    res.json(grupo)
   
   });

router.get('/MisGrupos',async (req,res) =>{
const grupo = await Grupo.find({dueno:req.headers.correo})
    console.log(req.headers.correo)
    res.send(grupo)
});

router.get('/Sala',async (req,res) =>{
    const grupo = await Grupo.findOne({_id:req.headers._id})
        console.log(req.headers._id)
        res.send(grupo)
    });

router.get('/AgregarUsuario',async (req,res) =>{

    const grupo = await Grupo.updateOne({_id:req.headers._id},{$push:{integrantes:req.headers.correo}})

})

router.get('/TodosLosGrupos',async (req,res) =>{
        const grupo = await Grupo.find({integrantes:{$in:[req.headers.correo]}})
            console.log(req.headers.correo)
            res.send(grupo)
});


    
module.exports = router;