const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Créer une nouvelle tâche
router.post('/', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  await newTodo.save();
  res.json(newTodo);
});

// Lire toutes les tâches
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Mettre à jour une tâche
router.put('/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

// Supprimer une tâche
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tâche supprimée' });
});

module.exports = router;
