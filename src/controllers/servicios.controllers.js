import Servicio from "../models/servicio.js";

export const prueba =  (req, res) => {
  console.log("prueba de ruta servicios");
  res.status(200).json({ message: "prueba de ruta servicios" });
};

export const crearServicio = async (req, res) => {
  try {
    const servicioNuevo = new Servicio(req.body);
    //guardar en la db
    await servicioNuevo.save();
    res.status(201).json({ message: "servicio creado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
