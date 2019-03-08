const express = require('express');
const cors = require('cors');
const port = 3333;
const uuid = require('uuid');

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: uuid(),
    image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/04/21/567811-smurfs-the-lost-village-poster.jpg',
    name: 'Sexy Smurf',
    age: 150,
    height: '3cm'
  },
  {
    id: uuid(),
    image: 'https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg',
    name: 'Brainey Smurf',
    age: 200,
    height: '5cm'
  },
  {
    id: uuid(),
    image: 'https://boygeniusreport.files.wordpress.com/2015/10/smurfs-movie.jpg?quality=98&strip=all&w=782',
    name: 'Papa Smurf',
    age: 500,
    height: '6cm'
  }
];

server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});

server.post('/smurfs', (req, res) => {
  const { name, age, height, image } = req.body;
  const newSmurf = { name, age, height, image, id: uuid() };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
