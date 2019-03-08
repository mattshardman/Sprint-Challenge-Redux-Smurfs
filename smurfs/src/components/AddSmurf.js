import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Paper, TextField, Button } from "@material-ui/core";

import { addSmurfs } from "../actions";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://geekculture.co/wp-content/uploads/2017/04/smurfs-thelostvillage.jpg");
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  box-sizing: border-box;
  padding: 20px 75px;
  height: 500px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function AddSmurf({ addSmurfs, addingSmurf }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    addSmurfs({ name, age, height, image });
  };

  if (addingSmurf) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Paper>
        <Form onSubmit={submitHandler}>
          <h3 style={{ margin: 0 }}>Add a Smurf</h3>
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            type="text"
            label="Age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <TextField
            type="text"
            label="Height"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
          <TextField
            type="text"
            label="Smurf Image"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Paper>
    </Container>
  );
}

export default connect(
  st => st,
  { addSmurfs }
)(AddSmurf);
