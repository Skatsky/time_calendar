const {Router} = require('express')
const Link = require('../models/Link')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const router  = Router()

router.post('/links', auth,  async (req, res) => {
    try {
        const user = {
            value: req.this.state.students,
            owner: req.user.userId 
        }
          

        const {students} = req.body

        console.log(students)
        
    } catch (e) {
        res.status(500).json({message: "Something went wrong, try again"})
    }
})

module.exports = router