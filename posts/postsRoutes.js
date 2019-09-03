const express = require("express")
const db = require('../data/db')
const cors = require('cors')


const router = express.Router()
router.use(cors())
router.post('/', (req, res) =>
{
    if(!req.body.title)
    {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    }
    else
    {
        db.insert(req.body)
            .then(response =>
                {
                    db.findById(response.id)
                    .then(response =>
                        {
                            res.status(201).json(response)

                        })
                })
            .catch(error =>
                {
                    res.status(500).json({ error: "There was an error while saving the post to the database" })
                })
    }
})

router.post('/:id/comments', (req, res) =>
{
    if(!db.findById(req.params.id))
    {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    }
    else if(!req.body.text)
    {
        res.status(400).json({ errorMessage: "Please provide text for the comment." })
    }
    else
    {
        db.insertComment({text:req.body.text, post_id: Number(req.params.id)})
            .then(response =>
                {
                    db.findCommentById(response.id)
                    .then(response =>
                        {
                            res.status(201).json(response)

                        })
                })
            .catch(error =>
                {
                    res.status(500).json({ error: "There was an error while saving the comment to the database" })
                })
    }
})

router.get('/', (req, res) =>
{
    db.find()
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ error: "The posts information could not be retrieved." })
            })
})

router.get('/:id', (req, res) =>
{
    const id = req.params.id
    db.findById(id)
        .then(response =>
            {
                if(response && response.length > 0)
                {
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ message: "The post with the specified ID does not exist." })
                }
            })
        .catch(err =>
            {
                res.status(500).json({ error: "The post information could not be retrieved." })
            })
})

router.get('/:id/comments', (req, res) =>
{
    const id = req.params.id
    db.findById(id)
        .then(response =>
            {
                if(response)
                {
                    db.findPostComments(id)
                    .then(response =>
                        {
                            res.status(200).json(response)
                        })
                    .catch(_ =>
                        {
                            res.status(500).json({ error: "The comments information could not be retrieved." })
                        })
                }
                else
                {
                    res.status(404).json({ message: "The post with the specified ID does not exist." })
                }
            })
        .catch(err =>
            {
                res.status(500).json({ error: "The post information could not be retrieved." })
            })
})

router.delete('/:id', (req, res) =>
{
    const id = req.params.id
    db.remove(id)
        .then(response =>
            {
                if(response)
                {
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ message: "The post with the specified ID does not exist." })
                }
            })
        .catch(err =>
            {
                res.status(500).json({ error: "The post could not be removed" })
            })
})

router.put('/:id', (req, res) =>
{
    const id = req.params.id
    if(!db.findById(id)) res.status(404).json({ message: "The post with the specified ID does not exist." })
    else if(!req.body.title || !req.body.contents)
    {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    }
    else
    {
        db.update(id, req.body)
            .then(response =>
                {
                    if(response)
                    {
                        db.findById(id)
                            .then(response =>
                                {
                                    res.status(200).json(response)
                                })
                    }
                    else
                    {
                        res.status(404).json({ message: "couldn't retrieve updated post"})
                    }
                })
            .catch(error =>
                {
                    res.status(500).json({ error: "The post information could not be modified." })
                })
    }
})

module.exports = router