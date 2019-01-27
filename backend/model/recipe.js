const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecipeSchema = new Schema({
    editMode: {
        type: Boolean
    },
    title: {
        type: String,
        unique:true
    },
    img: {
        type: String,
    },
    cur_version: {
        date: Date,
        ingredients:[],
        recipe: String
    },
    prev_version: [{
        data: Date,
        ingredients:[],
        recipe: String
    }
    ]
});


let Recipe = mongoose.model('recipes', RecipeSchema);
module.exports = Recipe;