// modules
const express = require('express');
const sales_scout = require('./sales-scout');

//express setup
const app = express();

// routes

app.get('/api/sales-scout/id/:id', (request, response) => {
    const id = request.params.id;
    
    sales_scout.getSaleByID(id).then( yardSale => {
        response.send(yardSale)
    });
})

app.get('/api/sales-scout/zip/:zip', (request, response) => {
    const zip = request.params.zip;
    
    sales_scout.getSalesByZip(zip).then( yardSales => {
        response.send(yardSales)
    });
})


// server listen
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

