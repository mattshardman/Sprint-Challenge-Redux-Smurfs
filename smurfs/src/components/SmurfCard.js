import React, { useState } from "react";
import styled from "styled-components";
import { deleteSmurfs } from "../actions";

const Smurf = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  background: red;
`;

const Input = styled.input`
  height: 40px;
  width: 80%;
  border: 1px #000 solid;
`;

function SmurfCard({ id, age, name, height, updateSmurfs, deleteSmurfs }) {
  const [updateSmurf, setUpdateSmurf] = useState(false);
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formHeight, setFormHeight] = useState("");

  const submitUpdate = e => {
    e.preventDefault();
    updateSmurfs({ id, name: formName, age: formAge, height: formHeight });
  };

  return (
    <Smurf>
      {updateSmurf ? (
        <form onSubmit={submitUpdate}>
          <Input
            type="text"
            value={formName}
            onChange={e => setFormName(e.target.value)}
          />
          <Input
            type="text"
            value={formAge}
            onChange={e => setFormAge(e.target.value)}
          />
          <Input
            type="text"
            value={formHeight}
            onChange={e => setFormHeight(e.target.value)}
          />
          <button type="submit">update</button>
        </form>
      ) : (
        <React.Fragment>
          <h1>{name}</h1>
          <p>{age}</p>
          <p>{height}</p>
          <button onClick={() => setUpdateSmurf(true)}>update</button>
        </React.Fragment>
      )}

      <button onClick={() => deleteSmurfs(id)}>delete</button>
    </Smurf>
  );
}

export default SmurfCard;
