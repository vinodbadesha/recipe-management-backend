const Recipe = require("../models/Recipe")

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

module.exports = {createRecipe}