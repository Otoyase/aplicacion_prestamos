const express = require('express');
const router = express.Router();
const { Prestamos } = require("../models");

router.get("/", async (req, res) => {

    const listadoPrestamos = await Prestamos.findAll();

    res.json(listadoPrestamos);

})

router.post("/", async (req, res) => {

    const prestamo = req.body;

    await Prestamos.create(prestamo)

    res.json(prestamo);

})

module.exports = router;
