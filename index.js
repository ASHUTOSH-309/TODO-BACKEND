const express = require("express")
const { createTodo, updateTodo } = require("./types")

const app = express()

const PORT = 8000
app.use(express.json())

app.post("/todo", (req, res) => {
    //to create a new todo
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(
        createPayload
    )

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
    }

    // otherwise put in on mongodb

})

app.get("/todos", (req, res) => {
// return the todos list from db



})


app.put("/completed", (req, res) => {
    //to update the todo status
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(
        updatePayloadPayload
    )

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
    }

    //update the status of the todo in db




})





app.listen(PORT, () => {

    console.log(`Server running at PORT${PORT}`)


})
