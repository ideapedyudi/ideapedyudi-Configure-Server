const express = require('express')

const app = express()

const port = 5000

app.get('/', (reg, res) => {
    res.send("hello express")
})

app.listen(port, () => console.log(`yaur server running on port ${port}`))