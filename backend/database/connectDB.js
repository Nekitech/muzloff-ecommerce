import Pool from 'pg'

export const connectDB = new Pool.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'muzloff',
    password: '347389',
    port: 5432,
})