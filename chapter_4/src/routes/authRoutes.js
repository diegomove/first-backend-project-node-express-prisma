import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { error } from 'console';
import prisma from '../prismaClient.js';

const router = express.Router()

//Register endpoint
router.post('/register', async (req, res) => {
    const {username, password } = req.body
    //encypt pwd
    const hashedPwd = bcrypt.hashSync(password, 8)
    
    try {
        const user =  await prisma.user.create({
            data: {
                username,
                password: hashedPwd
            }
        })

        const defaultTodo = `Hello! Add your first todo!`
        await prisma.todo.create({
            data: {
                userId: user.id,
                task: defaultTodo
            }
        })

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
        res.sendStatus(201)

    } catch (err) {
        console.log(error.message)
        res.sendStatus(503)
    }

    res.sendStatus(201)
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: { username: username }
        })

        if (!user) {
            return res.status(404).send({ message: 'User not found' })
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password)
        
        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password' })
        }

        //sucessful login, generate token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router