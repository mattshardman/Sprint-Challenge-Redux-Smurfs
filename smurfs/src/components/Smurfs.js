import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSmurfs } from '../actions';

const Container = styled.div`
    min-height: 400px;
    max-width: 90%;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
`;

function Smurfs({ fetchSmurfs }) {
    useEffect(() => {
        fetchSmurfs();
    },[]);

    return(
        <Container>
            hi
        </Container>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);