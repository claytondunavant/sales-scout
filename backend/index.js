// modules
const express = require('express');
const cors = require('cors');
const sales_scout = require('./sales-scout');

//dotenv
require('dotenv').config()

//express setup
const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

//get DB model
const User = require('./models/user')

// routes

//add emails ans zip to database
app.post('/api/users', (request, response) => {
    const body = request.body;
    
    //test if there is content
    if (!body.email || !body.zip) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    
    //make new schema object
    const user = new User({
        email: body.email,
        zip: body.zip,
        date: new Date(),
    })
    
    //save note
    user.save().then(savedNote => {
        response.json(body)
    })


})

app.get('/api/sales-scout/id/:id', (request, response) => {
    const id = request.params.id;
    
    sales_scout.getSaleByID(id).then( yardSale => {
        response.send(yardSale)
    }).catch( yardSale => {
        response.status(404).end()
    });
})

app.get('/api/sales-scout/zip/:zip', (request, response) => {
    const zip = request.params.zip;
    
    sales_scout.getSalesByZip(zip).then( yardSales => {
        response.send(yardSales)
    });
})


// server listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

