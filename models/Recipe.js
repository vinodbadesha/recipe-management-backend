const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    imageUrl: {type: String},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    categories: {type: String, required: true}
})

module.exports = mongoose.model("Recipe", RecipeSchema)