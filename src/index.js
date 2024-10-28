import fastify from 'fastify';

import users from './users.js';

const app = fastify();
const port = 3000;

app.get('/', (req, res) => {
  res.type('text/html');
  res.send('<h1>Hello Hexlet</h1>');
});

app.get('/hello', (req, res) => {
  const { name = 'World' } = req.query;
  res.send(`Hello, ${name}!`);
});

app.get('/users', (req, res) => {
  let { page = 1, per = 5 } = req.query;
  page = parseInt(page, 10);
  per = parseInt(per, 10);
  const start = page * per - per;
  const stop = page * per;
  const selectedUsers = users.slice(start, stop);
  res.send(selectedUsers);
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
