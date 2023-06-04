const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log(galleryId)
    const sqlText = `UPDATE gallery SET "likes" = ("likes" + 1 ) WHERE "id"=$1`
    // for(const galleryItem of galleryItems) {
     pool.query(sqlText,[galleryId])
     .then((result) => {
        console.log('Got the update!')
        res.send(200)
     }).catch((err) => {
        console.log('Oh NO the err on PUT', err)
        res.sendStatus(500)
     })
        
 }) // END PUT Route

// GET Route
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM gallery`
    pool.query(sqlText)
    .then((result) => {
        console.log('Got my stuff from the database')
        res.send(result.rows);
    }).catch((err) => {
        console.log('error with get request', err)
        res.sendStatus(500)
    })


   
}); // END GET Route
router.post('/', (req,res) => {
    const newGallery = req.body
    const sqlText = `INSERT INTO gallery("path","description")
    VALUES ($1,$2);`

    pool.query(sqlText,[newGallery.path,newGallery.description])
    .then((result) => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.delete('/:id', (req,res) => {
    idToDelete = req.params.id
    const sqlText = `DELETE FROM gallery WHERE id = $1;`

    pool.query(sqlText,idToDelete)
    .then((result) => {
        res.sendStatus(200)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

module.exports = router;