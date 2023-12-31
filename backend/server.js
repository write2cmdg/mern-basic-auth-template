import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('This message is generated in the server by app.get '))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server listeng on port ${port}`))







//nodemon npm run server 

//.env file example:
//      NODE_ENV=development
//      PORT=8080
//      MONGO_URI=mongodb+srv://write2cmdg:<password>@cluster0.g6qokzc.mongodb.net/collection
//      JWT_SECRET=YourOwnSecretPhrase