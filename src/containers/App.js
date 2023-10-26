import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemons: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ pokemons: users }) });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { pokemons, searchfield } = this.state;
        const filteredPokemon = pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !pokemons.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>Pokedex</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList pokemons={filteredPokemon} />
                    </Scroll>
                </div>
            );
    }
}

export default App;