const express = require('express');
const router = express.Router();
const {
    createPokemon,
    getAllPokemons,
    getPokemonById,
    updatePokemon,
    deletePokemon,
} = require('./pokemonController');

router.post('/', createPokemon);
router.get('/', getAllPokemons);
router.get('/:id', getPokemonById);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

module.exports = router;
