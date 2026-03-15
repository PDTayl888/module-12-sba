const axios = require("axios");

const searchMovies = async (requestAnimationFrame, res) => {
  try {
    const title = req.query.title;

    if (!title) {
      return res.status(400).json({ error: "error message" });
    }

    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.log();
  }
};

const getMovieDetails = async (req, res) => {
  try {
    const imbId = req.id.params.id;
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: imdbId,
        apikey: process.env.OMDB_API_KEY,
      },
    });
    req.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch movie details from OMDB" });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};
