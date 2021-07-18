// modules
const express = require('express');
const sales_scout = require('./sales-scout');

//express setup
const app = express();

// routes

app.get('/api/sales-scout/:id', (request, response) => {
    const id = request.params.id;
        
    response.send( sales_scout.getSalesByZip(id));
    
})

// server listen
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

