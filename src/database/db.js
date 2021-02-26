 // importar a dependencia do sqlite3
 const sqlite3 = require("sqlite3").verbose()

 //criar o objeto que ira fazer operaçoes no banco de dados

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

     const query = `
        insert into places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) values (?,?,?,?,?,?,?);
    `

    const values =  [
        "Colectoria",
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos eletrônicos, lâmpadas"
     ]
     
     function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
     }
     db.run (query, values, afterInsertData)

     //db.run(query, valores, afterInsertData)


     // 3 consultar dados da tabela



     // 4 deletar dados na tabela
 })