/**
 * Created by gsh on 2017/9/9.
 */
const express = require('express');
let router = express.Router();

router.get('/e',(req,res,next)=>{
  console.log('进入了router的test的e2')
})


module.exports = router;