import React, { useState } from "react";
import styled from "styled-components";

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

function AddSmurf() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, age, height)
    }



  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <Input type="text" value={age} onChange={e => setAge(e.target.value)}/>
      <Input type="text" value={height} onChange={e => setHeight(e.target.value)}/>
      <button type="submit">Submit</button>
    </Form>
  );
}

export default AddSmurf;
