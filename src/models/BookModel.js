module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
      paranoid: true,
      // If you want to give a custom name to the deletedAt column
      deletedAt: "destroyTime",
  }
  );
  return Book;
};