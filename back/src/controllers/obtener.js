const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const obtenerPersonaje = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then(({ data }) => {
      const { id, name, species, origin, image, gender } = data;
      const character = { id, name, species, origin, image, gender };
      return name
        ? res.json(character)
        : res.status(404).json({ message: "Not found" });
    })
    .catch((error) => {
      return res.status(500).json({ message: error });
    });
};

// Exportar la función para que esté disponible en otros archivos
module.exports = obtenerPersonaje;
