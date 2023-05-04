const express = require('express')

const fs = require('fs');
const path = require('path');
const app = express()
const port = 3000

let noticias = [];


app.get('/noticias', (req, res) => {
    noticias.push({
        id: 1,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
        


    },
    {
        id: 2,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs" 
    },{
        id: 3,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
    },
    {
        id: 4,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs"
    })
    res.send(noticias);
})

app.post('/noticias', (req, res) => {
    noticias.push({
        id: 1,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
        


    },
    {
        id: 2,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs" 
    },{
        id: 3,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
    },
    {
        id: 4,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs"
    })
    res.send(noticias);

    
})

app.put('/noticias', (req, res) => {
    noticias.push({
        id: 1,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
        


    },
    {
        id: 2,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs" 
    },{
        id: 3,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
    },
    {
        id: 4,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs"
    })
    res.send(noticias);
})

app.delete('/noticias', (req, res) => {
    noticias.push({
        id: 1,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
        


    },
    {
        id: 2,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs" 
    },{
        id: 3,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs",
    },
    {
        id: 4,
        noticias:"El mejor empresario de la historia",
        Description: "El mejor empresario de la historia es una persona Estado Unidos que se llama Steve Jobs"
    })
    res.send(noticias);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })