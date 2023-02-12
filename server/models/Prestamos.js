module.exports = (sequelize, DataTypes) => {
  const Prestamos = sequelize.define("Prestamos", {
    elemento_prestado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prestatario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_prestamo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Prestamos;
};
