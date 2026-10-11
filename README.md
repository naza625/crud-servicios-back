# Backend crud-servicios 

# Dependencias

- cors
- morgan
- express
- moongose

# Endpoints

- Crear servicios: http://localhost:3000/api/servicios/ 
- Método: POST
- Enviar un objeto con este formato:

```
{
  "nombreServicio": "Desarrollo web",
  "precioServicio": 450,
  "categoria": "Desarrollo web",
  "descripcion": "Desarrollo web de 5 paginas",
  "imagen": "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg"
}
```