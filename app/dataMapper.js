const database = require("./database");

const dataMapper = {
  getAllCoffees: async () => {
    const coffees = await database.query("SELECT * FROM coffee");
    return coffees.rows;
  },

  getNewCoffees: async () => {
    const newCoffees = await database.query(
      "SELECT * FROM coffee WHERE created_at > '2024-05-19'"
    );
    return newCoffees.rows;
  },

  getCoffeeById: async (coffeeId) => {
    const coffee = await database.query(
      `SELECT * FROM coffee WHERE id = ${coffeeId}`
    );
    return coffee.rows[0];
  },

  getCoffeesByCategory: async (category) => {
    const coffees = await database.query(
      `SELECT * FROM coffee WHERE characteristic = '${category}'`
    );
    return coffees.rows;
  },

  getAllCharacteristics: async () => {
    const characteristics = await database.query(
      "SELECT DISTINCT characteristic from coffee"
    );
    return characteristics.rows;
  },
};

module.exports = dataMapper;
