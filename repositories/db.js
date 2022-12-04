import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://umuxfknx:6t-xOE3NSyLsdLAWutGQeT8LVnQG-6on@rosie.db.elephantsql.com/umuxfknx",
    {
        dialect: "postgres",
        define: {
            //grava automaticamente data e hora de criação/alteração
            timestamps: false
        }
    }
)
    
export default sequelize;