const express = require('express');
const router=express.Router();

const franchise=require("../controllers/franchise")
router.post('/', franchise.saveFranchise);

module.exports=router;