const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

// Middlewares (avant les routes)
app.use(cors());              // la ligne qui manquait
app.use(express.json());

// Routes
const categorieRouter = require("./routes/categorie.route.js");
const articleRouter = require("./routes/article.route");
const scategorieRouter = require("./routes/scategorie.route");

app.use('/api/categories', categorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/scategories', scategorieRouter);

app.get("/", (req, res) => {
    res.send("page d'accueil");
});
app.get("/contact", (req, res) => {
    res.send("page de contact");
});

// Connexion à la base de données
mongoose.connect(process.env.databaselocal)
.then(() => { console.log("DataBase Successfully Connected"); })
.catch(err => {
    console.log("Unable to connect to database", err);
    process.exit();
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

module.exports = app;