const express = require('express');
const Joi = require('joi');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/users', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  res.send('New user has been created.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});