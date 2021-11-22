const db = require('../models')
const Book = db.books

exports.findAll = (req, res) =>{
    Book.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message : err.message || "Error While Retrievieng"
        })
    });
}

exports.create = (req, res) =>{
    const post = new Book({
        title : req.body.title,
        author : req.body.author,
        year : req.body.year,
        avaibility : req.body.published ? req.body.published : true
    })

    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message : err.message || "Error While Creating"
        })
    });
}

exports.findOne = (req, res) =>{
    const id = req.params.id
    Book.findById(id)
    .then((result) => {
        res.send(result)   
    }).catch((err) => {
        res.status(409).send({
            message : err.message || "Error While Showing Data"
        })
    });
}

exports.update = (req, res) =>{
    const id = req.params.id

    Book.findByIdAndUpdate(id, req.body)
    .then((result) => {
        if(!result){
            res.status(404).send({
                message : "Data Not Found"
            })
        }

        res.send({
            message : "Data Update"
        })
    }).catch((err) => {
        res.status(409).send({
            message : err.message || "Error While Updating Data"
        })
    });
}

exports.delete = (req, res) =>{
    const id = req.params.id

    Book.findByIdAndRemove(id)
    .then((result) => {
        if(!result){
            res.status(404).send({
                message : "Data Not Found"
            })
        }

        res.send({
            message : "Data Was Deleted"
        })
    }).catch((err) => {
        res.status(409).send({
            message : err.message || "Error While Deleting Data"
        })
    });
}