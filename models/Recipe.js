const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    ingredients: {type: [String], required: true},
    instructions: {type: [String], required: true},
    categories: {type: String, required: true},
    readyIn: {type: String, requied: true}
})

module.exports = mongoose.model("Recipe", RecipeSchema)