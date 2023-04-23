import express from 'express'
import cors from 'cors'
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphql/schema.js";
import {root} from "./graphql/rootResolver.js";
import router from "./routes/index.js";
import bodyParser from 'body-parser'


const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use('/uploads', express.static('uploads/images'));
app.use('/api', router)

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,

}))


app.get('/', (req, res) => res.send('Hello there!'));

app.listen(PORT, () => console.log(`Application started on port ${PORT}`));