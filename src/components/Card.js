import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc grow bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='pokemons' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;