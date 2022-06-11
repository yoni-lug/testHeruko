const express = require('express')
const app = express()


let mainRoute = require ("./routes/mainRoute.js")
mainRoute (app)

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})