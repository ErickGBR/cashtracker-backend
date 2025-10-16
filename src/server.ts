import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import db from './config/db'


async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green('Database connected'))
    } catch (error) {
        console.error(colors.red(`Database connection failed: ${error}`))
        process.exit(1)
    }
}

connectDB()

const app = express()

app.use(morgan('dev'))

app.use(express.json())



export default app