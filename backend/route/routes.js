const express = require('express');
const router = express.Router();
let Recipe = require('../model/recipe');

router.route('/recipes')
    .get((req, res) => {
        Recipe.find((err, items) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(items);
            }
        })
    });
router.route('/editRecipe')
    .put((req, res) => {
        let query = {_id: req.body._id};
        Recipe.findOneAndUpdate(query, req.body, {new: true}, (err, doc) => {
            if (err) return res.status(500).send(err);
            return res.send(doc);
        });
    });

router.route('/newRecipe')
    .post((req, res) => {
        let newRecipe = new Recipe(req.body);
        newRecipe.save(function (err, doc) {
            if (err) return res.status(500).send(err);
            // Made this for getting object id that was not returned on post
            Recipe.findOne({title:doc.title},(err,rescipe)=>{
                if (err) return res.status(500).send(err);
                return res.send(rescipe);

            })
        })
    });


module.exports = router;