import React from 'react';
import styled from 'styled-components';
import { deleteSmurfs } from '../actions';

const Smurf = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    background: red;
`;

function SmurfCard({ id, age, name, height, deleteSmurfs }) {
    console.log(id)
    return (
        <Smurf>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{height}</p>
            <button onClick={() => deleteSmurfs(id)}>delete</button>
        </Smurf>    
    )
}

export default SmurfCard;
