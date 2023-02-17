const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>404 Error. Page not found. Perhaps it was never suppose to be found?</h1>");
});

module.exports = router;
