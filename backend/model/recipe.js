const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecipeSchema = new Schema({
    editMode: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
    },
    img: {
        type: String,
    },
    cur_version: {
        date: String,
        ingredients:String,
        recipe: String
    },
    prev_version: []
});


let Recipe = mongoose.model('recipes', RecipeSchema);
module.exports = Recipe;