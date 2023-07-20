const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static('public'));
const todos = [
  { id: 1, priority: 1, description: 'Cure cancer' },
  { id: 2, priority: 2, description: 'Prove moon landing was a hoax' },
  {
    id: 3,
    priority: 3,
    description:
      'Decide whether taco or tuna fish sandwich would win in a fist fight',
  },
  { id: 4, priority: 1, description: 'Write 16th book' },
  { id: 5, priority: 2, description: 'Try new wine' },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});
app.post('/todos', (req, res) => {
  const todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);
  res.json(todo);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
