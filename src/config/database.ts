import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
 logging: console.log,
});

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
}).catch(error => console.error("Failed to sync database:", error));


export default sequelize;
