const express = require('express');
const router = express.Router();
const SCategorie = require("../models/scategorie");

// afficher la liste des s/categories.
router.get('/', async (req, res) => {
  try {
    const scat = await SCategorie.find({}, null, { sort: { '_id': -1 } }).populate("categorieID");
    res.status(200).json(scat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// créer une nouvelle s/catégorie
router.post('/', async (req, res) => {
  const { nomscategorie, imagescat, categorieID } = req.body;
  const newSCategorie = new SCategorie({
    nomscategorie: nomscategorie,
    imagescat: imagescat,
    categorieID: categorieID
  });
  try {
    await newSCategorie.save();
    res.status(200).json(newSCategorie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;