import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js'

const app = express();
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.get('/', (req, res) => res.send('Hello there!'));

app.listen(PORT, () => console.log(`Application started on port ${PORT}`));