const router = require('express').Router();
const { getTasks, addTask, deleteTask, updateTask } = require('../controllers/task.controller');

router.route('/tasks').get(getTasks).post(addTask);

router.route('/tasks/:id').delete(deleteTask).put(updateTask);

module.exports = router;