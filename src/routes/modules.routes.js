const express = require('express');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminauth');
const validate = require('../middleware/validate');
const router = express.Router();

const db = require('../../models/index')

const { addmoduleValidation, mappingValidation, getModuleValidation, addModule, getModule , featureMapping, moduleRoleGet} = require('new_test_roles')

// const { addModule, getModule , featureMapping, moduleRoleGet } = require('../../index')

router.post('/create', auth, adminAuth, validate(addmoduleValidation), async (req, res) => {
  const request = {
    userID: req?.user?.id,
    modules: req.body?.data,
    db
  };
  try {
      const result = await addModule(request);
      res.send(result);
  } catch (error) {
      res.status(500).send({ 
          data: {}, 
          message: {
              codes: 'error',
              value: 'Error adding module',
              html: 'Error adding module'
          }
      });
  }
});


router.get('/getall', auth, async(req, res) =>{
  const request = {
    db
  };
  try{
    const result = await getModule(request);
    res.send(result);
  } catch (error){
    res.status(500).send({ 
      data: {}, 
      message: {
          codes: 'error',
          value: 'Error get module',
          html: 'Error get module'
      }
  });
  }
});


router.post('/modulefeaturemapping', auth, adminAuth,validate(mappingValidation),  async(req, res) => {
  const request = {
    module: req?.body?.moduleKey,
    features: req?.body?.featuresKey,
    db
  };
  try{
    const result = await featureMapping( request );
    res.send( result);
  } catch (error){
    res.status(500).send({ 
      data: {}, 
      message: {
          codes: 'error',
          value: 'Error  modulefeaturemapping',
          html: 'Error modulefeaturemapping'
      }
  });
  }
}),

router.post('/getmodulerole', auth, validate(getModuleValidation), async (req, res) => {
  const request ={
    userName: req?.body?.userName,
    db
  };
  try{
    const result = await moduleRoleGet( request );
    res.send( result );
  } catch (error){
    res.status(500).send({ 
      data: {}, 
      message: {
          codes: 'error',
          value: 'Error get getmodulerole',
          html: 'Error get getmodulerole'
      }
  });
  }
});


module.exports = router;
