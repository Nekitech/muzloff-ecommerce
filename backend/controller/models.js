import {pool} from "../database/pool.js";

class PersonController {

    getAllUser = async (req, res) => {
        const {rows: users} = await pool.query('SELECT * FROM Person')
        res.json(users)
    }

    createUser = async (req, res) => {
        const {name, surname} = req.body

        const {rows: data} = await pool.query(`INSERT INTO Person (name, surname) values ($1, $2) RETURNING *`, [name, surname])

        res.json({
            message: 'ok',
            data
        })
    }
}
export default new PersonController()

