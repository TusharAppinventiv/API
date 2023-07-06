const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.put('/users/update', (req, res) => {
  const id = req.params.id;
  res.send(`User with ID ${id} has been updated.`);
});

app.post('/users/create', (req, res) => {
    const id1 = req.params.id1;
  res.send('New user has been created ');
});

app.patch('/users/patch', (req, res) => {
  res.send(`User ABC has been partially updated.`);
});

app.delete('/users/delete', (req, res) => {
  res.send(`User with ID has been deleted.`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});