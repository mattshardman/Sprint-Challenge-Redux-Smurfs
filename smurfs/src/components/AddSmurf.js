import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { addSmurfs } from "../actions";

const Form = styled.form`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  width: 80%;
  border: 1px #000 solid;
`;

function AddSmurf({ addSmurfs, addingSmurf }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    addSmurfs({ name, age, height });
  };

  if (addingSmurf) {
    return <Redirect to="/" />;
  }

  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Input type="text" value={age} onChange={e => setAge(e.target.value)} />
      <Input
        type="text"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default connect(
  st => st,
  { addSmurfs }
)(AddSmurf);
