import {connectDB} from "../database/connectDB.js";

class PersonModel {
    nameTablePersons = "person";

    getAllUser = async () => {
        const {rows: users} = await connectDB.query(`SELECT * FROM ${this.nameTablePersons}`);
        return users
    }

    createUser = async (req) => {
        const {name, email, phone_number} = req;
        const {rows: return_user} = await connectDB.query(`INSERT INTO ${this.nameTablePersons} (name, phone_number, email) values ($1, $2, $3) RETURNING *`, [name, phone_number, email])
        return return_user[0]
    }

    getUser = async (id) => {
        const {rows: user} = await connectDB.query(`SELECT * FROM ${this.nameTablePersons} WHERE id = $1`, [id])
        return user[0]
    }

    deleteUser = async ({id}) => {

        const {rows: deleted_user} = await connectDB.query(`DELETE FROM ${this.nameTablePersons} WHERE id = $1 RETURNING *`, [id])
        return deleted_user[0]
    }

}

export const PersonController =  new PersonModel();


