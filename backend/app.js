import express from 'express'
import cors from 'cors'
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphql/schema.js";
import {authRoot, root} from "./graphql/rootResolver.js";
import authRouter from "./routes/auth.js";
import uploadImagesRouter from "./routes/upload.js";
import {auth} from "./middleware/auth.middleware.js";
import {applyMiddleware} from "graphql-middleware";


const app = express();
const PORT = process.env.PORT || 4002;


app.use(cors())
app.use(express.json())
// app.use(bodyParser.json({limit: '50mb'}))
app.use('/uploads', express.static('uploads/images'));
app.use('/api', uploadImagesRouter)


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
}))



const schemaWithMiddleware = applyMiddleware(schema, auth)

app.use('/authApi', auth, graphqlHTTP({
    graphiql: true,
    schema: schemaWithMiddleware,
    rootValue: authRoot,


}))
// Auth
app.use(authRouter)


app.get('/', (req, res) => res.send('Hello there!'));

app.listen(PORT, () => console.log(`Application started on port ${PORT}`));