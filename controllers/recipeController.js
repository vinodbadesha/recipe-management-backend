const Recipe = require("../models/Recipe")

// 1.CREATING A RECIPE

const createRecipe = async (request, response) => {
    try{
        const {title, ingredients, instructions, categories} = request.body
        const recipe = new Recipe({
            title, ingredients, instructions, categories
        })
        await recipe.save()
        response.status(201).json(recipe)
    }
    catch(error){
        console.log(error)
        response.status(500).json({message: "Server error"})
    }
}

// 2.GET ALL RECIPES

const getRecipe = async (request, response) => {
    try{
        const recipe = await Recipe.find()
        response.status(200).json(recipe)
    }
    catch(error){
        console.log(error)
        response.status(500).json({message: "Server error"})
    }
}

// 3.GET RECIPE BY ID

const getRecipeById = async(request, response) => {
    try{
        const recipe = await Recipe.findById(request.params.id)
        if (!recipe){
            return response.status(404).json("Recipe not found")
        }
        response.status(200).json(recipe)
    }
    catch(error){
        response.status(500).json({message: "Server error"})
    }
}

// 4.UPDATE THE RECIPE BY ID

const updateRecipeById = async (request, response) => {
    try{
        const {title, ingredients, instructions, categories} = request.body
        const recipe = await Recipe.findByIdAndUpdate(request.params.id, {title, ingredients, instructions, categories})
        if (!recipe){
            return response.status(404).json("Recipe not found")
        }
        response.status(200).json(recipe)
    }
    catch(error){
        response.status(500).json("Server error")
    }
}

// 5.DELETE RECIPE BY ID

const deleteRecipe = async(request, response) => {
    try{
        const recipe = await Recipe.findByIdAndDelete(request.params.id)
        if (!recipe){
            return response.status(404).json("Recipe not found")
        }
        response.status(200).json("Recipe deleted")
    }
    catch(error){
        response.status(500).json({message: "Server error"})
    }
}

module.exports = {createRecipe, getRecipe, getRecipeById, deleteRecipe, updateRecipeById}