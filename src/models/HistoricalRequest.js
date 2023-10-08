module.exports = (sequelize, DataTypes) => {
  const HistoricalRequest = sequelize.define(
    "HistoricalRequest",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      url: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      headers: {
        type: DataTypes.JSON,
      },
      body: {
        type: DataTypes.JSON,
      },
    },
  );
  return HistoricalRequest;
};
