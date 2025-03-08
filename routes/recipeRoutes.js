const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipeController")
const recipeModel = require("../models/Recipe")

router.post("/add-recipe", recipeController.createRecipe)
router.get("/get-all-recipes", recipeController.getRecipe)
router.get("/get-recipe/:id", recipeController.getRecipeById)
router.delete("/delete-recipe/:id", recipeController.deleteRecipe)
router.put("/update-recipe/:id", recipeController.updateRecipeById)

module.exports = router
