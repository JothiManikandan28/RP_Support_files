/* eslint-disable import/no-extraneous-dependencies */


//not use router
// router.post('/adminemailexist', auth, validate(userValidation.adminemailexist), adminEmailExist);




const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const adminAuth = require('../middleware/adminauth');
const db = require('../../models/index')
const multer = require('multer');
const multerS3 = require('multer-s3');
const shortId = require('shortid');
const S3 = require('../utility/s3Connection');
const config = require('../config/vars');
// const { createUser, editUser, getAllUser, listingUser, userNameChange, getUserName, userNameExist, emailExistUser, getUserDetails, resendlink, updateStatus, updateUserAndPass, updateuser, changeAdmin, deleteUser, uploadImage, reUploadImage , updateEmailExist} = require('../../index')

const upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: config?.app?.bucketName,
    contentType: multerS3?.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
      cb(null, `${shortId?.generate()}-${file?.originalname}`);
    },
  }),
});

const {
  userCreateValidation,
  userEditValidation,
  changePasswordValidation,
  changeUserNameValidation,
  getUsernameValidation,
  userNameExitValidation,
  emailExitValidation,
  getUserdataValidation,
  userResendLinkValidation,
  updateStatusValidation,
  userPassValidation,
  userUpdateValidation,
  changeAdminValidation,
  userDeleteValidation,
  createUser,
  editUser, 
  getAllUser, 
  listingUser, 
  userNameChange, 
  getUserName, 
  userNameExist, 
  emailExistUser, 
  getUserDetails, 
  resendlink, 
  updateStatus, 
  updateUserAndPass, 
  updateuser, 
  changeAdmin, 
  deleteUser, 
  uploadImage, 
  reUploadImage , 
  updateEmailExist
} = require('new_test_roles');


const { emailExist } = require('../utility/rescodes');



router.post('/create', auth, validate(userCreateValidation), async (req, res) => {
  const request = {
    firstName: req?.body?.firstName,
    lastName: req?.body?.lastName,
    mobile: req?.body?.mobile,
    email: req?.body?.email,
    modules: req?.body?.modules,
    userID: req?.user?.id,
    isAdmin: req?.user?.isAdmin,
    adminName: req?.user?.userName,
    db
  };
  try {
    const result = await createUser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error creating user',
        html: 'Error creating user'
      }
    });
  }
});


router.put('/edit', auth, validate(userEditValidation), async (req, res) => {
  const request = {
    userid: req?.body?.userId,
    firstName: req?.body?.firstName,
    lastName: req?.body?.lastName,
    mobile: req?.body?.mobile,
    email: req?.body?.email,
    module: req?.body?.modules,
    userID: req?.user?.id,
    isAdmin: req?.user?.isAdmin,
    db
  };
  try {
    const result = await editUser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error Edit user',
        html: 'Error Edit user'
      }
    });
  }
});

router.get('/getAll', auth, async (req, res) => {
  const request = {
    userID: req?.user?.id,
    db
  };
  try {
    const result = await getAllUser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error getAll user',
        html: 'Error getAll user'
      }
    });
  }
});

router.get('/listing', auth, async (req, res) => {
  const request = {
    db
  };
  try {
    const result = await listingUser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error listing user',
        html: 'Error listing user'
      }
    });
  }
});


router.post('/changepassword', auth, validate(changePasswordValidation), async (req, res) => {
  const request = {
    userID: req?.user?.id,
    oldPassword: req.body.oldPassword,
    newPassword: req.body.newPassword,
    db
  };
  try {
    const result = await UserPasswordChange(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error changePassword user',
        html: 'Error changePassword user'
      }
    });
  }
});


router.post('/changeusername', auth, validate(changeUserNameValidation), async (req, res) => {
  const request = {
    userID: req?.user?.id,
    userName: req.body.userName,
    db
  };
  try {
    const result = await userNameChange(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error changeusername user',
        html: 'Error changeusername user'
      }
    });
  }
});

//this routes not resturn responce
router.post('/getusername', auth, validate(getUsernameValidation), async (req, res) => {
  const request = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    db
  };
  try {
    const result = await getUserName(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error getusername user',
        html: 'Error getusername user'
      }
    });
  }
});


router.post('/usernameexist', auth, validate(userNameExitValidation), async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    db
  };
  try {
    const result = await userNameExist(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error usernameexist user',
        html: 'Error usernameexist user'
      }
    });
  }
});



router.post('/emailexist', auth, validate(emailExitValidation), async (req, res) => {
  const request = {
    userEmail: req?.body?.email,
    db
  };
  try {
    const result = await emailExistUser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error emailExist user',
        html: 'Error emailExist user'
      }
    });
  }
});


router.post('/getuserdetails', validate(getUserdataValidation), auth, async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    authUserName: req?.user?.userName,
    db
  };
  try {
    const result = await getUserDetails(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error user details',
        html: 'Error user details'
      }
    });
  }
});


router.post('/resendlink', auth, validate(userResendLinkValidation), async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    userID: req?.user?.id,
    db
  };
  try {
    const result = await resendlink(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error resendlink',
        html: 'Error resendlink'
      }
    });
  }
});



router.post('/updatestatus', auth, validate(updateStatusValidation), async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    status: req?.body?.status,
    userID: req?.user?.id,
    db,
  };
  try {
    const result = await updateStatus(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error updatestatus',
        html: 'Error updatestatus'
      }
    });
  }

});


router.post('/updatenameandpass', auth, validate(userPassValidation), async (req, res) => {
  const request = {
    userId: req?.body?.userId,
    password: req?.body?.newPassword,
    userName: req?.body?.newUserName,
    userID: req?.user?.id,
    db,
  };
  try {
    const result = await updateUserAndPass(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error updatenameandpass',
        html: 'Error updatenameandpass'
      }
    });
  }
});


router.put('/update', auth, validate(userUpdateValidation), async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    firstName: req?.body?.firstName,
    fatherName: req?.body?.fatherName,
    lastName: req?.body?.lastName,
    dob: req?.body?.dob,
    gender: req?.body?.gender,
    street1: req?.body?.street1,
    street2: req?.body?.street2,
    pincode: req?.body?.pincode,
    country: req?.body?.country,
    state: req?.body?.state,
    city: req?.body?.city,
    email: req?.body?.email,
    mobile: req?.body?.mobile,
    imageURL: req?.body?.imageURL,
    userID: req?.user?.id,
    db,
  };
  try {
    const result = await updateuser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error user update',
        html: 'Error user update'
      }
    });
  }

});



router.post('/changeadmin', auth, adminAuth, validate(changeAdminValidation), async (req, res) => {
  const request = {
    currentAdmin: req?.body?.currentAdmin,
    newAdmin: req?.body?.newAdmin,
    adminPassword: req?.body?.adminPassword,
    userName: req?.user?.userName,
    userID: req?.user?.id,
    isAdmin: req?.user?.isAdmin,
    userPassword: req?.user?.password,
    db
  };
  try {
    const result = await changeAdmin(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error changeadmin',
        html: 'Error changeadmin'
      }
    });
  }
});


router.delete('/delete', auth, validate(userDeleteValidation), async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    userID: req?.user?.id,
    isAdmin: req?.user?.isAdmin,
    db
  };
  try {
    const result = await deleteUser(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error delete user',
        html: 'Error delete user'
      }
    });
  }
});


router.post('/upload', auth, upload.single('image'), async (req, res) => {
  const request = {
    fileName: req?.file?.key,
  };
  try {
    const result = await uploadImage(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error upload user Image',
        html: 'Error upload user Image'
      }
    });
  }
});


router.put('/reupload', auth, upload.single('image'), async (req, res) => {
  const request = {
    userName: req?.body?.userName,
    blogId: req?.body?.blogId,
    fileName: req?.file?.key,
    db
  };
  try {
    const result = await reUploadImage(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error reUpload user Image',
        html: 'Error reUpload user Image'
      }
    });
  }
});




router.post('/updateemailexist', auth, validate(emailExitValidation), async (req, res) => {
  const request = {
    userEmail: req?.body?.email, 
    userID: req?.user?.id,
    db
};
  try {
    const result = await updateEmailExist(request);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      data: {},
      message: {
        codes: 'error',
        value: 'Error reUpload user Image',
        html: 'Error reUpload user Image'
      }
    });
  }
});

module.exports = router;

