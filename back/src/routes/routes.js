const router = require("express").Router();

const login = require("../controllers/login");
const getCharbyId = require("../controllers/obtener");
const { deleteFav, postFav } = require("../controllers/handleFavs");

router.get("/character/:id", getCharbyId);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
module.exports = router;
