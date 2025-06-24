import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  storage: "./database.sqlite",
});
