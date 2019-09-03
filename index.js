const express = require("express")
const postsRoutes = require('./posts/postsRoutes')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use('/api/posts', postsRoutes)
server.use(cors())

const port = 5000
server.listen(port, _ =>
{
    console.log(`server listening on port ${port}`)
})