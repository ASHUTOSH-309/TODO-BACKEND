const express = require("express")
const mongoose = require("mongoose")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const cors=require("cors")


const app = express()
app.use(cors({}))


const PORT = 8000
app.use(express.json())

app.post("/todo", async (req, res) => {
    //to create a new todo
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(
        createPayload
    )
    console.log(req.body)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }

    // otherwise put in on mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        msg: "Todo Succesfully created"
    })

})

app.get("/todos", async (req, res) => {
    // return the todos list from db

    const todos = await todo.find({})

    return res.json({ todos }).status(200)



})


app.put("/completed", async (req, res) => {
    //to update the todo status
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(
        updatePayload
    )

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }

    //update the status of the todo in db
    // all objects are automatically assigned _id in a mongodb database
    await todo.update({
        _id: req.body.id,

    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })




})

app.listen(PORT, () => {
    console.log(`Server running at PORT${PORT}`)
})
