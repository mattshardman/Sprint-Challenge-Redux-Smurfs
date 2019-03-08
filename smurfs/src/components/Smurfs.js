import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

import * as actions from "../actions";
import SmurfCard from "./SmurfCard";

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
`;

const Wrapper = styled.section`
  min-height: 400px;
  max-width: 90%;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

function Smurfs(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.error) {
    return <div>Oh no an error done occur.</div>;
  }

  if (props.fetchingSmurfs) {
    return (
      <Container>
        <CircularProgress size={50} />
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        {props.smurfs.map(smurf => (
          <SmurfCard
            key={smurf.name}
            {...smurf}
            updateSmurfs={props.updateSmurfs}
            deleteSmurfs={props.deleteSmurfs}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = ({
  fetchingSmurfs,
  smurfs,
  deletingSmurfs,
  error
}) => ({ fetchingSmurfs, smurfs, deletingSmurfs, error });

export default connect(
  mapStateToProps,
  actions
)(Smurfs);
