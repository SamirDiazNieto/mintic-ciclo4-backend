const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express")
const {resolvers} = require('./resolvers')
const {types} = require('./types')


const app = express()
const server = new ApolloServer({
    typeDefs:types,
    resolvers:resolvers
})



mongoose.connect("mongodb+srv://jeep2198:jeep2198@cluster0.2edvy.mongodb.net/ModuleProjets", async()=>{
    console.log("conexión a bd exitosa");
    app.listen(5010, async()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log("Servidor inicializado en puerto 5010");
    })
})