import {buildSchema} from "graphql/utilities/index.js";

const schemaString = `
    type User {
    id: ID,
    username: String,
    surname: String,
    age: Int
}
`

export const schema = buildSchema(schemaString)