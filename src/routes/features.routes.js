const express = require('express');
// const { createFeature, getFeature, moduleFeature } = require('../../index');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminauth');
const validate = require('../middleware/validate');
const db = require('../../models');
const { featureCreateValidation, listmodulefeatureValidation,  createFeature, getFeature, moduleFeature  } = require('new_test_roles')
const router = express.Router();


router.post('/create', auth, adminAuth, validate(featureCreateValidation), async (req, res) => {
    const request = {
        userID: req?.user?.id,
        features: req.body?.data,
        db
    };
    try {
        const result = await createFeature(request);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            data: {},
            message: {
                codes: 'error',
                value: 'Error create features',
                html: 'Error create features'
            }
        });
    }
});


router.get('/get', auth, async (req, res) => {
    const request = {
        db
    };
    try {
        const result = await getFeature(request);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            data: {},
            message: {
                codes: 'error',
                value: 'Error get features',
                html: 'Error get features'
            }
        });
    }
});


router.post('/listmodulefeature', auth, validate(listmodulefeatureValidation), async (req, res) => {
    const request = {
        isAdmin: req?.user?.isAdmin,
        module: req?.body?.module,
        db
    };
    try {
        const result = await moduleFeature(request);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            data: {},
            message: {
                codes: 'error',
                value: 'Error listing features',
                html: 'Error listing features'
            }
        });
    }
});



module.exports = router;
