import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class ElectricityMeter extends Model {}
ElectricityMeter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    meterName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ElectricityMeter",
    tableName: "electricity_meters",
  }
);

export default ElectricityMeter;
