require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT
const path = require("path")
const routerIndex = require("./routes/index")
const morgan = require("morgan")
app.use(express.static('public'));

app.listen(port, () => { // Arranca el servidor.
    console.log(`Servidor corriendo en http://localhost:${port}.`)
})

app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// Configurar EJS como motor de plantillas.
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Configurar Express para servir páginas estáticas.

app.use("/", routerIndex) // Usar rutas.
app.use((req, res) => { // Error 404.
    res.status(404).render("404")
})
app.use(express.json()) // Para manejar JSON.