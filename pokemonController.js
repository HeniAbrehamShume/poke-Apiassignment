const Pokemon = require('./pokemon');

exports.createPokemon = async (req, res) => {
    try {
        const pokemon = new Pokemon(req.body);
        await pokemon.save();
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPokemonById = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
        res.json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
        if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
