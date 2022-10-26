const Sequelize = require('sequelize')
const dotenv = require('dotenv')

//configurar la ruta de confi.env
dotenv.config({ path: './config_env/config.env'})
//definir un objeto de
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
  
    {
    host:process.env.DATABASE_HOST,
    dialect:"mysql",
    }
)

module.exports = sequelize
// console.log(sequelize)
