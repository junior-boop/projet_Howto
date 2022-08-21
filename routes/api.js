const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
const images = require('./images')
const database = require('../database/database.json')
const auteurs = require('../database/auteurs.json')
const categories = require('../database/categories.json')
const images_db = require('../database/images_db.json')


router.use('/images', images)


router.route('/tutos')
    .get((req, res) => {
       console.log(req.params.id)
       res.json(database)
    })

    .post((req, res) => {
        console.log(req.params, req.body)
        
    })
router.route('/images_db')
    .get((req, res) => {
       console.log(req.params.id)
       res.json(images_db)
    })

    .post((req, res) => {
        console.log(req.params, req.body)
        
    })
router.route('/auteurs')
    .get((req, res) => {
       res.json(auteurs)
    })

    .post((req, res) => {
        console.log(req.params, req.body)
        
    })




module.exports = router