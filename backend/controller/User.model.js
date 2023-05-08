import {connectDB} from "../database/connectDB.js";
import {generateWebToken} from "../helpers/generateWebToken.js";

class PersonModel {
    nameTablePersons = "person";

    getAllUser = async () => {
        const {rows: users} = await connectDB.query(`SELECT * FROM ${this.nameTablePersons}`);
        return users
    }

    createUser = async (req) => {
        const {name, email, number, password} = req;
        const role = 3;
        const {rows: return_user} = await connectDB.query(`INSERT INTO ${this.nameTablePersons} 
                (name, phone_number, email, password, role_id) values ($1, $2, $3, $4, $5) RETURNING *`, [name, number, email, password, role])
        return return_user[0]
    }

    getUser = async (id) => {

        const {rows: user} = await connectDB.query(`SELECT * FROM ${this.nameTablePersons} WHERE id = $1`, [id])
        return user[0]
    }

    getUserBy = async (params, mod) => {
        let query = '';
        const nameRows = Object.entries(params);
        nameRows.forEach((entry, ix, arr) => {
            if(ix === arr.length - 1) {
                return query += ` (${entry[0]} = '${entry[1]}')`
            }
             else {
                query += ` (${entry[0]} = '${entry[1]}') ${mod}`
            }
        })
        const {rows: user} = await connectDB.query(`SELECT * FROM ${this.nameTablePersons} WHERE ${query}`);
        return user[0]
    }

    deleteUser = async (id) => {

        const {rows: deleted_user} = await connectDB.query(`DELETE FROM ${this.nameTablePersons} WHERE id = $1 RETURNING *`, [id])
        return deleted_user[0]
    }

    registration = async (req, res) => {
        const {name, email, number: phone_number, password} = req.body;

        if((await this.getUserBy({email, phone_number}, 'OR')))
            return res.status(400).send('Пользователь с такой почтой или номером уже существует!')

        const createdUser = await this.createUser(req.body)
        res.status(200).send('Пользователь записан!' + ` ${JSON.stringify(createdUser, null, 2)}`)

    }

    auth = async (req, res) => {
        const {number: phone_number, password} = req.body;
        const user = await this.getUserBy({phone_number, password}, 'AND');
        const token = generateWebToken(user.id, user.role)

        if(!user)
            return res.status(400).send('Неправильно введен логин или пароль!')

        res.status(200).json({token})
    }

}

export const PersonController =  new PersonModel();


