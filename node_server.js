'use strict'
const express = require('express')

const app = express()

// app.use(express.static('./dist'))
app.use(express.static('./dist_test'))

app.listen(9090)
