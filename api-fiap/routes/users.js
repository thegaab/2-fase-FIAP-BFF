const express = require('express');
const router = express.Router();

/* GET users listing. */
let users = [
  {id: 1, name: 'User 1'},
  {id: 2, name: 'User 2'},
  {id: 3, name: 'Usuario 3'}
];

router.get('/', (req, res)=>{
  res.json(users);
});

router.get('/:id', (req, res)=>{
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
})

router.post('/', (req, res)=>{
  const user = {
    id: users.length +1,
    name: req.body.name
  };
  users.push(user);
  res.status(201).json(user);
})

router.put('/:id', (req, res)=>{
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

user.name = req.body.name;
  res.json(user);  
})

router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');
  users.splice(userIndex, 1);
  res.json(users);
})

module.exports = router;
