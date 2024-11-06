

console.log('Hello nodejs..');




const crud = require('./crud')

const express = require('express')
const body_parser = require('body-parser')

const app = express()
const port = 3000
app.use(body_parser.json())

//GET

app.get('/api/users',(request,response)=>{
    response.json(crud.get())
})

//GET BY ID
app.get('/api/users/:id',(request,response)=>{

    const user_id=parseInt(request.params.id)
    const user=crud.get_by_id(user_id)
    if(user){
        response.json(user)
    }else{
        response.status(404).json(`error: can't find the user with the id:${user_id}`)
    }

})

//POST
app.post('/api/users',(request,response)=>{
    const new_user=request.body
    const update_user=crud.post(new_user)
   response.json(update_user)
})

// PUT
app.put('/api/users/:id', (request, response) => {
    const user_body = request.body
    const user_id = parseInt(request.params.id)
    const updated_or_created_user = crud.put(user_id, user_body)
    response.json(updated_or_created_user)
})
// PATCH
app.patch('/api/users/:id', (request, response) => {
    const user_body = request.body
    const user_id = parseInt(request.params.id)
    const updated_user = crud.patch(user_id, user_body)
    if (updated_user) { 
        response.json(updated_user)
    }
    else {
        response.status(404).json({ "error": `cannot find user with id ${user_id}`})
    }
})

//DELETE
app.delete('/api/users/:id', (request, response)=>{
    const user_id=parseInt(request.params.id)
    const update_user=crud.delete_by_id(user_id)
    if(update_user){
        response.json(`user with id ${user_id} deleted`)
    }else{
        response.status(404).json({"error": `cannot find user with id ${user_id}`})
    }

})













app.listen(port, ()=>{
    console.log('express is running in port 3000');
    
})