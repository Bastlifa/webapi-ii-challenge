const express = require("express")
const server = express()

const postsRoutes = require('./posts/postsRoutes')

server.use('/api/posts', postsRoutes)

const port = 5000
server.listen(port, _ =>
{
    console.log(`server listening on port ${port}`)
})