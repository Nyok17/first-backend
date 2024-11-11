import express from "express";
import { Todo } from "../models/Todo.js";


const router = express.Router();

router.get('/', async (req, res)=>{
    const todos = await Todo.find();
    res.json(todos)
})

router.post('/', async (req, res)=>{
    const todo = new Todo({
        text: req.body.text
    })

    await todo.save()
    res.json(todo)
})

router.put('/:id', async (req, res)=>{
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
})

router.delete('/:id', async (req, res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ mesaage: 'Todo deleted'})
})

export default router