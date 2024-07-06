const express = require('express');

const auth = require('../../src/middleware/auth');


const validate = require('../middleware/validate')


const router = express.Router();

const { listingRole, addRole, getRole, deleteRole, updateRole , addroleValidation, getroleValidation,  updateroleValidation, deleteroleValidation } = require('new_test_roles')

// const { listingRole, addRole, getRole, deleteRole, updateRole } = require('../../index')
const db = require('../../models/index');

router.get('/getall', async (req, res) => {
    const request = {
        db
    };
    try {
        const result = await listingRole(request);
        res.send(result);
    } catch (error) {
        console.error("Error handling getall request:", error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.post('/create', auth, validate(addroleValidation), async (req, res) => {
    const request = {
        isAdmin: req?.user?.isAdmin,
        roleName: req?.body?.roleName,
        moduleKey: req?.body?.moduleKey,
        featuresKey: req?.body?.featuresKey,
        userName: req?.user?.userName,
        userIds: req.body.userName,
        userID: req?.user?.id,
        db
    };
    try {
        const result = await addRole(request);
        res.send(result);
    } catch (error) {
        res.status(500).send({ 
            data: {}, 
            message: {
                codes: 'error',
                value: 'Error adding role',
                html: 'Error adding role'
            }
        });
    }
});


router.post('/get', auth, validate(getroleValidation), async(req, res) => {
    const request = {
        moduleKey: req?.body?.moduleKey,
        roleNameKey: req?.body?.roleNameKey,
        userID: req?.user?.id,
        db
    };
    try{
        const result = await getRole(request);
        res.send(result);
    } catch( error ){
        res.status(500).send({
            data: {},
            message:{
                codes: 'error',
                value: 'Error geting role',
                html: 'Error geting role'
            }
        });
    }
});


router.delete('/delete', auth, validate(deleteroleValidation), async(req, res) => {
    const request = {
        moduleRole: req?.body?.data,
        userID: req?.user?.id,
        isAdmin: req?.user?.isAdmin,
        db
      };
    try{
        const result = await deleteRole(request);
        res.send(result);
    } catch( error ){
        res.status(500).send({
            data: {},
            message:{
                codes: 'error',
                value: 'Error delete role',
                html: 'Error delete role'
            }
        });
    }
});


router.put('/update',  auth, validate(updateroleValidation), async( req, res ) => {
    const request = {
        newRoleName: req?.body?.newRoleName,
        roleName: req?.body?.roleNameKey,
        module: req?.body?.moduleKey,
        features: req?.body?.featuresKey,
        userIds: req?.body?.userName,
        userID: req?.user?.id,
        isAdmin: req?.user?.isAdmin,
        db
    };
    try{
        const result = await updateRole(request);
        res.send(result);
    } catch( error ){
        res.status(500).send({
            data: {},
            message:{
                codes: 'error',
                value: 'Error update role',
                html: 'Error update role'
            }
        });
    }
});





module.exports = router;
