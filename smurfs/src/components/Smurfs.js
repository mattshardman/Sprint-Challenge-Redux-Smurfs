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

function Smurfs(props) {

    useEffect(() => {
        props.fetchSmurfs();
    },[]);

    if (props.error) {
        return <div>Oh no an error done occur.</div>
    }

    if (props.fetchingSmurfs) {
        return <div>Loading</div>
    }

    return(
        <Container>
            { props.smurfs.map((smurf) => <SmurfCard 
                key={smurf.name} 
                {...smurf} 
                updateSmurfs={props.updateSmurfs}
                deleteSmurfs={props.deleteSmurfs} 
            />)}
        </Container>
    );
}

const mapStateToProps = ({ fetchingSmurfs, smurfs, deletingSmurfs, error }) => ({ fetchingSmurfs, smurfs, deletingSmurfs, error });

export default connect(mapStateToProps, actions)(Smurfs);