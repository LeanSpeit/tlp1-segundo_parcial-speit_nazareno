//inicio el servidor
const express = require("express");
const db = require("./db");

//Creación del servidor
const app = express();

//Middlewares
app.use(express.text());
app.use(express.json());

//Creación de rutas
//Pagina de Inicio
app.get("/", (req, res) => {
    res.send("Pagina de Inicio");
});

  //Obtener todos los libros
app.get("/books", (req, res) => {
    res.json(db);
});

  //Obtener Libro por id
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const getBooks = db.find((Books) => Books.id === id);
    res.json(getBooks);
});

  //Crear un libro
app.post("/books", (req, res) => {
    const { id, Name, Author, Year } = req.body;

    const newBook = db.push({ id: id, Name: Name, Author: Author, Year: Year});
    console.log(newBook);
    res.json({ message: "Libro creado con éxito" });
});

  //Actualizar los datos del libro
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { Name, Author, Year } = req.body;

    const getBooks = db.find((Books) => Books.id === id);

    getBooks.Books = Name, Author, Year;
    console.log(getBooks);

    res.json({ message: "Libro actualizado" });
});

  //Eliminar Libro
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const getBooks = db.find((Books) => Books.id === id);
    const bookIndex = db.indexOf(getBooks);
    const deletedBook = db.splice(bookIndex, 1);

    res.json({ message: "Libro eliminado", deletedBook });
});

//Corre el servidor en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servidor en puerto ${PORT}`));