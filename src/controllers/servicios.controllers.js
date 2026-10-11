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


export const listarServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.status(200).json({ message: "servicios listados", data: servicios });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const servicioBuscado = async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (!servicio) {
      return res.status(404).json({ message: "servicio no encontrado" });
    }
    res.status(200).json({ message: "servicio encontrado"});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};



export const borrarServicio= async (req, res) => {
  try {
    const servicioBorrado = await Servicio.findByIdAndDelete(req.params.id);
    if (!servicioBorrado) {
      return res.status(404).json({ message: "servicio no encontrado" });
    }
    res.status(200).json({ message: "servicio borrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al intentar borrar el servicio" });
  }
};

export const editarServicio = async (req, res) => {
  try {
    const servicioEditado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!servicioEditado) {
      return res.status(404).json({ message: "servicio no encontrado" });
    }
    res.status(200).json({ message: "servicio editado", data: servicioEditado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al intentar editar el servicio" });
  }
  }
