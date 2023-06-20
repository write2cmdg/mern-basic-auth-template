import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 5000


const app = express()

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('This message is generated in the server by app.get '))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server listeng on port ${port}`))


//nodemon npm run server 