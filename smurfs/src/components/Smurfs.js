import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../actions';
import SmurfCard from './SmurfCard';

const Container = styled.div`
    min-height: 400px;
    max-width: 90%;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
`;

function Smurfs({ fetchSmurfs, deleteSmurfs, fetchingSmurfs, smurfs, deletingSmurfs }) {
    console.log(smurfs)
    useEffect(() => {
        fetchSmurfs();
    },[]);

    if (fetchingSmurfs) {
        return <div>Loading</div>
    }

    return(
        <Container>
            { smurfs.map((smurf) => <SmurfCard 
                key={smurf.name} 
                {...smurf} 
                deleteSmurfs={deleteSmurfs} 
            />)}
        </Container>
    );
}

const mapStateToProps = ({ fetchingSmurfs, smurfs }) => ({ fetchingSmurfs, smurfs });

export default connect(mapStateToProps, actions)(Smurfs);