const axios = require('axios');

const searchMovies = async (requestAnimationFrame, res) => {
    try {
        const title = req.query.title;

        if (!title) {
            return res.status(400).json({ error: "error message"});
        }

        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.log()
    }