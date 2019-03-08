import React from 'react';
import styled from 'styled-components';

const Smurf = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    background: red;
`;

function SmurfCard({ age, name, height}) {
    return (
        <Smurf>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{height}</p>
        </Smurf>    
    )
}

export default SmurfCard;
