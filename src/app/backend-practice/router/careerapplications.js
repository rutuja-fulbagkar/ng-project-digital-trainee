const express = require('express');
const router=express.Router();

const careerapplications=require("../controllers/careerapplications")
router.post('/', careerapplications.saveCareerapplications);

module.exports=router;