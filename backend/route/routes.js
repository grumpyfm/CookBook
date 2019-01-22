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
    .post((req, res) => {
        let prop = req.body;
        Recipe.findOne({email: prop._id}, function (err, doc) {
            console.log('in put');
            if (!doc)
                return 'Could not load Document';
            else {
                doc = p;

                doc.save(function (err) {
                    if (err)
                        console.log('error');
                    else
                        console.log('success')
                });
            }
        });
    });

router.route('/newRecipe')
    .post((req, res) => {
        let newRecipe = new Recipe(req.body);
        newRecipe.save(function (err, doc) {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(doc);
            }
        });
    });


module.exports = router;