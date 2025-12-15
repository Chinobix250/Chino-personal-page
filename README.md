# Lucas – Portafolio Personal

¡Bienvenido/a a mi página web personal!

Proyecto desarrollado como portafolio para mostrar habilidades en desarrollo web con Node.js, Express, y Bootstrap.

## Características principales

- Renderizado del lado del servidor con EJS
- Diseño limpio y minimalista, completamente con **Bootstrap 5**
- Arquitectura organizada (rutas → controladores → vistas)
- Variables de entorno seguras con `dotenv`
- Logging de peticiones en desarrollo con Morgan

## Tecnologías utilizadas

| Tecnología   | Versión   | Uso                                |
|--------------|-----------|------------------------------------|
| Node.js      | ≥18.x     | Entorno de ejecución               |
| Express      | ^5.1.0    | Framework web                      |
| EJS          | ^3.1.10   | Motor de plantillas                |
| Bootstrap    | 5.x       | Framework CSS para diseño responsive |
| dotenv       | ^17.2.3   | Gestión de variables de entorno    |
| Morgan       | ^1.10.1   | Logging HTTP (dev)                 |
| Nodemon      | ^3.1.11   | Reinicio automático en desarrollo |

## Estructura del proyecto

```
├── controllers/    # Lógica de los controladores
├── views/          # Plantillas EJS
├── public/         # CSS personalizado, JS, imágenes
├── routes/         # Definición de rutas
├── server.js       # Archivo principal de la aplicación
├── .env.example    # Ejemplo de variables de entorno
└── package.json
```

## Requisitos

- Node.js ≥ 18

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/Chinobix250/Chin-s-personal-page.git
cd Chino-personal-page

# 2. Instalar dependencias
npm install

# 3. (Opcional) Configurar variables de entorno
cp .env.example .env
# Edita .env si deseas cambiar el puerto

# 4. Ejecutar
npm run dev    # desarrollo con reinicio automático
# o
npm start      # modo producción
```

El sitio estará disponible en http://localhost:3000 (o el puerto configurado)

## Scripts disponibles

| Script       | Descripción                                |
|--------------|--------------------------------------------|
| `npm start`  | Inicia el servidor                         |
| `npm run dev`| Inicia con nodemon (ideal para desarrollar) |

## Contribuir

¡Toda sugerencia o mejora es bienvenida!

1. Hace fork del repositorio
2. Crea tu rama
3. Dejá un commit claro
4. Push y abre un Pull Request

## Contacto

- GitHub: [@Chinobix250](https://github.com/Chinobix250)

¡Gracias por visitar mi portafolio!

---
**Desarrollado con pasión por Lucas (Chinō) – 2025**
```
