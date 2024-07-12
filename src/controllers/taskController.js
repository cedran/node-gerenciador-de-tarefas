const Task = require('../models/task');

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task(title, description);
  newTask.save();
  res.status(201).json({ message: 'Task created successfully' });
};

exports.getAllTasks = (req, res) => {
  const tasks = Task.getAll();
  res.status(200).json(tasks);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedTask = Task.update(id, title, description);
  res.status(200).json({ message: 'Task updated successfully', updatedTask });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id);
  res.status(200).json({ message: 'Task deleted successfully' });
};