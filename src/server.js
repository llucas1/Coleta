const express = require("express")
const { Server } = require("http")
const server = express()


// configurando a pasta publica
server.use(express.static("public"))

// utilizando template enfine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
 
// configurar caminhos da minha aplicação
//Iniciando a  Página inicial
 
server.get("/", (req, res)=> {
   return res.render("index.html", {title:"Um titulo"})
})

server.get("/create-point", (req, res)=> {
   return res.render("create-point.html")
})

server.get("/search", (req, res)=> {
 // mostrar a pagina html com os dados do banco de dados
       return res.render("search-result.html")
})

// ligar o servidor
server.listen(3000)