// lucasdev - uKs6kh3SurdgYCFu
import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  users.push(req.body);
  res.status(201).send('O post deu certo!');
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});


app.listen(3000);