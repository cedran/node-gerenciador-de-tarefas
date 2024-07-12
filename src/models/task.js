const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'tasks.json');

class Task {
  constructor(title, description) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
  }

  static getAll() {
    const tasks = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    return tasks;
  }

  save() {
    const tasks = Task.getAll();
    tasks.push(this);
    fs.writeFileSync(dbPath, JSON.stringify(tasks));
  }

  static update(id, title, description) {
    const tasks = Task.getAll();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex].title = title;
      tasks[taskIndex].description = description;
      fs.writeFileSync(dbPath, JSON.stringify(tasks));
      return tasks[taskIndex];
    }
    return null;
  }

  static delete(id) {
    let tasks = Task.getAll();
    tasks = tasks.filter(task => task.id !== id);
    fs.writeFileSync(dbPath, JSON.stringify(tasks));
  }
}

module.exports = Task;
