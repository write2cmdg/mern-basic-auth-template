import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000
const app = express()




app.get('/', (req, res) => res.send('Server is ready'))

app.listen(port, () => console.log(`server listeng on port ${port}`))

// this is a message typed from my new tablet this is a message