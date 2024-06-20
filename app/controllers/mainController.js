const dataMapper = require("../dataMapper");

const mainController = {
  homePage: async (req, res) => {
    try {
      const newCoffees = await dataMapper.getNewCoffees();
      res.render("home", { css: "home", newCoffees });
    } catch (error) {
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },

  catalogPage: async (req, res) => {
    try {
      let coffees;
      if (req.query.category) {
        coffees = await dataMapper.getCoffeesByCategory(req.query.category);
      } else {
        coffees = await dataMapper.getAllCoffees();
      }
      const characteristics = await dataMapper.getAllCharacteristics();
      res.render("catalog", { css: "catalog", coffees, characteristics });
    } catch (error) {
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },

  productPage: async (req, res) => {
    try {
      const coffee = await dataMapper.getCoffeeById(Number(req.params.id));
      res.render("product", { css: "product", coffee });
    } catch (error) {
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },

  shopPage: (req, res) => {
    res.render("shop", { css: "shop" });
  },

  contactPage: (req, res) => {
    res.render("contact", { css: "contact" });
  },
};

module.exports = mainController;
