const express = require('express')
const  { login } = require('../controllers/user')

const router = express.Router()

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register User
 *     description: Post user data. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Creation User. 
 */
router.post('/login',login)

module.exports =  router;