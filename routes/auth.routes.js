const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


//api/auth/
router.post(
    '/register', 
    [
        check('login', 'Incorrect login').isLength({ min: 3 }),
        check('password', 'Minimum length of password 6').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data'
            })
        }

        const {login, password} = req.body

        const person  = await User.findOne({ login })

        if (person) {
            return req.status(400).json({message: "User already exists"})
        }

        const hashedPasssword = await bcrypt.hash(password, 12)
        const user = new User({login, password: hashedPasssword})

        await user.save()

        res.status(201).json({message: "User created!"})
        
    } catch (e) {
        res.status(500).json({message: "Something went wrong, try again"})
    }
})

router.post(
    '/login', 
    [
        check('login', 'Input correct login').isLength({ min: 3 }),
        check('password', 'Input correct password').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect login data'
            })
        }

        const {login, password} = req.body

        const user = await User.findOne({ login })

        if (!user) {
            return res.status(400).json({message: 'User did not exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Incorrect password, try again'})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '2h' }
        )

        res.json({ token, userId: user.id })
        
    } catch (e) {
        res.status(500).json({message: "Something went wrong, try again"})
    }
})

module.exports = router