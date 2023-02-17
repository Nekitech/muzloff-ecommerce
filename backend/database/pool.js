import Pool from 'pg'

export const pool = new Pool.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'muzzlof',
    password: '347389',
    port: 5432,
})