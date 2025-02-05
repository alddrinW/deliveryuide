// Llamamos a las librerias que vamos a utilizar
const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Crear una conexion de prueba para verificar si las funciones del env y el archivo database.js estan funcionando
router.get('/test', async (req, res) => {
    try{
        const [rows] = await db.query('SELECT * FROM tesis')
        res.status(500).json({
            message: "Conectando a la Base de Datos",
            timestamp: rows[0].tesis
        })

    }catch(err){
        console.log("Error en la conexion", error);
        res.status(500).json({
            message: "Error en la conexion",
            error: error
        })
    }
});

// Realizamos las consultas a la base de datos del proyecto y gestionar todos los recursos que se van a utilizar
router.get('/tesis', async (req, res) => {
    try{
        const [tesis] = await db.query('SELECT * FROM tesis')
        res.json({
            status: "success",
            data: tesis
        })
    }catch(error){
        console.log("Error en la conexion", error);
        res.status(500).json({
            message: "Error en la conexion",
            error: error
        })
    }
})


// Realizamos las consultas a la base de datos del proyecto y gestionar todos los recursos que se van a utilizar
router.get('/rol', async (req, res) => {
    try{
        const [rol] = await db.query('SELECT * FROM rol')
        res.json({
            status: "success",
            data: tesistas
        })
    }catch(error){
        console.log("Error en la conexion", error);
        res.status(500).json({
            message: "Error en la conexion",
            error: error
        })
    }
})

module.exports = router;