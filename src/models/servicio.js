import mongoose, { Schema } from "mongoose";

const servicioSchema = new Schema(
  {
    nombreServicio: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    precioServicio: {
      type: Number,
      required: true,
      min: 0,
    },
    descripcion: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
      trim: true,
    },
    imagen: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (valor) => /\.(jpg|jpeg|png|gif)$/i.test(valor),
        message: "La imagen debe ser un archivo de imagen válido (jpg, jpeg, png, gif)",
      },
    },
    categoria: {
      type: String,
      required: true,
      enum: ["Desarrollo web", "Backend & API", "Consultoria"],
    },
  },
  { timestamps: true } 
);

const Servicio = mongoose.model("Servicio", servicioSchema);

export default Servicio;