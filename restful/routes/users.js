module.exports = function(app) {
  app.get("/users", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(
      JSON.stringify({
        users: [
          {
            name: "Hcode",
            email: "contato@hcode.com.br",
            id: 1
          }
        ]
      })
    );
  });
  app.get("/users/admin", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(
      JSON.stringify({
        users: []
      })
    );
  });
};