const express = require('express')
const app = express()
const port = 3000

// proggetto base con rotta "/"
app.get ("/", (req, res) => {
    res.send("Server del mio blog")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})