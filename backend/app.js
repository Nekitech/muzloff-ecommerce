import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js'
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphql/schema.js";

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema

}))

app.get('/', (req, res) => res.send('Hello there!'));

app.listen(PORT, () => console.log(`Application started on port ${PORT}`));