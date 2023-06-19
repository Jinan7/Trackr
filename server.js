import express from 'express'
//middle ware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express()



app.get('/', (req, res) =>{
    throw new Error("terhe")
    res.send('Welcome')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)   
})