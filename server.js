// lucasdev - uKs6kh3SurdgYCFu
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/users', async (req, res) => {
  await prisma.user.create({
    data: {
      email:req.body.email,
      name: req.body.name,
      password: req.body.password, 
    }
  });
  res.status(201).json({message: 'O post deu certo!'});
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.put('/users/:id', async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email:req.body.email,
      name: req.body.name,
      password: req.body.password,
    }
  });
  res.status(201).json({message: `Os dados de ${req.body.name} foram alterados.`});
});

app.delete('/users/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    }
  });
  res.status(200).json({message: "Usuário deletado com sucesso!"});
});

app.listen(3000);