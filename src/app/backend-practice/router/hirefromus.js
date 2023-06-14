const express = require('express');
const router=express.Router();

const hirefromus=require("../controllers/hirefromus")
router.post('/', hirefromus.saveHirefromus);

module.exports=router;