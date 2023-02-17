import {pool} from "../database/pool.js";

class PersonController {

    getAllUser = async (req, res) => {
        const {rows: users} = await pool.query('SELECT * FROM Person')
        res.json(users)
    }

    createUser = async (req, res) => {
        const {name, surname} = req.body

        const {rows: data} = await pool.query(`INSERT INTO Person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(data)
    }

    getUser = async (req, res) => {
        const id = req.params.id

        const {rows: user} = await pool.query('SELECT * FROM Person WHERE id = $1', [id])
        res.json(user)
    }
    deleteUser = async (req, res) => {
        const id = req.params.id

        const {rows: user} = await pool.query('DELETE FROM Person WHERE id = $1 RETURNING *', [id])
        res.json(user)
    }
}
export default new PersonController()

