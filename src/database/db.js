 // importar a dependencia do sqlite3
 const sqlite3 = require("sqlite3").verbose()

 //criar o objeto que ira faer operaçoes no banco de dados

 const db = new sqlite3.Database("./src/database/database.db")
 
 //utilizar o objeto de banco de dados, para nossa operações
 db.serialize(() => {
     // 1 criar uma tabela
        db.run(`
            create table if not exists places (
                id integer primary key autoincrement,
                name text,
                image text,
                address text,
                address2 text,
                state text,
                city text,
                items text
            );
        `)

     // 2 inserir dados na tabela


     // 3 consultar dados da tabela


     // 4 deletar dados na tabela
 })