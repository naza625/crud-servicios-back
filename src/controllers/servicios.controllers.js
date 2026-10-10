import Servicio from "../models/servicio.js";

export const prueba = (req, res) => {
  console.log("prueba de ruta servicios");
  res.status(200).json({ message: "prueba de ruta servicios" });
};

export const crearServicio = (req, res) => {
  try {
    console.log("creo servicio");
    res.status(200).json({ message: "servicio creado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
