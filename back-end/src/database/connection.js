const Sequelize = require('sequelize');

const sequelize = new Sequelize("keykeeper", "root", "root", {
    host: 'database',
    dialect: 'mysql',
})

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso")
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada")
    process.exit(1);
})

module.exports = sequelize;