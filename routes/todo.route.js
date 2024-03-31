const express = require('express');
const router = express.Router();
const Todo = require("../models/todo.model.js");
const {getTodo, getTodoByIp,postTodo,patchTodo,deleteTodo} = require('../controller/todo.controller.js');

router.get('/', getTodo);
router.get('/:id',getTodoByIp);
router.post('/', postTodo);
router.patch('/:id', patchTodo);
router.delete('/:id', deleteTodo);

module.exports = router;