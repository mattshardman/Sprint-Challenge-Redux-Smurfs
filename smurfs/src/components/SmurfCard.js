import React, { useState } from "react";
import styled from "styled-components";
import { deleteSmurfs } from "../actions";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextInput from "@material-ui/core/TextField";

const styles = {
  card: {
    width: 345,
    margin: 20
  },
  media: {
    height: 250
  },
  content: {
    height: 130
  }
};

const Smurf = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  background: red;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 130;
`;

function SmurfCard({
  id,
  age,
  name,
  height,
  updateSmurfs,
  deleteSmurfs,
  classes
}) {
  const [updateSmurf, setUpdateSmurf] = useState(false);
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formHeight, setFormHeight] = useState("");

  const submitUpdate = e => {
    e.preventDefault();
    updateSmurfs({ id, name: formName, age: formAge, height: formHeight });
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg"
        title="Smurf"
      />
      <CardContent className={classes.content}>
        {updateSmurf ? (
          <Form onSubmit={submitUpdate}>
            <TextInput
              type="text"
              label={name}
              value={formName}
              onChange={e => setFormName(e.target.value)}
            />
            <TextInput
              type="text"
              label={age}
              value={formAge}
              onChange={e => setFormAge(e.target.value)}
            />
            <TextInput
              type="text"
              label={height}
              value={formHeight}
              onChange={e => setFormHeight(e.target.value)}
            />
            <Button type="submit" size="small" color="primary">
              update
            </Button>
          </Form>
        ) : (
          <React.Fragment>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              Age: {age} 
            </Typography>
            <Typography component="p">
             Height: {height}
            </Typography>
          </React.Fragment>
        )}
      </CardContent>
      { !updateSmurf && 
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => setUpdateSmurf(true)}
        >
          update
        </Button>
        <Button size="small" color="secondary" onClick={() => deleteSmurfs(id)}>
          delete
        </Button>
      </CardActions>
      }
    </Card>
  );
}

export default withStyles(styles)(SmurfCard);
