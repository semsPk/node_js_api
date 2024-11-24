import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import ElectricityMeter from "./ElectricityMeter";

// Define the attributes of UserMeterAccess
interface UserMeterAccessAttributes {
  id: number;
  userId: number;
  meterName: number;
  notification: boolean;
}



// Extend the UserMeterAccess class
class UserMeterAccess extends Model<
  UserMeterAccessAttributes
> {
  public id!: number;
  public userId!: number;
  public meterName!: string;
  public notification!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model
UserMeterAccess.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
    },
    meterName: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: ElectricityMeter, key: "meterName" },
    },
    notification: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "UserMeterAccess",
    tableName: "user_meter_access",
  }
);

// Associations
User.hasMany(UserMeterAccess, { foreignKey: "userId" });
ElectricityMeter.hasMany(UserMeterAccess, { foreignKey: "meterName" });

UserMeterAccess.belongsTo(User, { foreignKey: "userId" });
UserMeterAccess.belongsTo(ElectricityMeter, { foreignKey: "meterName" });

export default UserMeterAccess;
