const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger/swagger')
const userRouter = require('./routers/user') 

const app = express()
const PORT = 5000;

app.listen(PORT,() => {
    console.log(`App Running on Port ${PORT}`);
})
app.use('/api/login', userRouter)
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
