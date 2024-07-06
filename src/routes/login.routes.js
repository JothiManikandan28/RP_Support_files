const express = require('express');
// const { loginAdmin, forgotPassword, logout, resetPassword, refreshtoken } = require('../controllers/login.controller');
const validate = require('../middleware/validate');
// const loginValidation = require('../validation/login.validation');
// const auth = require('../middleware/auth');
const routes = express.Router();

const db = require('../../models');


const { login , forgotpassword ,loginValidation, forgotValidation} = require('new_test_roles')


// const { login, forgotpassword  } = require('../../index')

routes.post('/login', validate(loginValidation),  async (req, res) => {
    const request = {
        username: req.body.username,
        password: req.body.password,
        db
    }

    const result = await login(request);
    res.send(result)
})


routes.post('/forgotpassword',  validate(forgotValidation),  async(req,res) => {
    const request = {
        username: req.body.username,
        email: req.body.email,
        db
    }
    const result = await forgotpassword(request);
    res.send(result)
});


module.exports = routes;
