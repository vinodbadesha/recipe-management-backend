const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipeController")
const recipeModel = require("../models/Recipe")

router.post("/add-recipe", recipeController.createRecipe)

module.exports = router
