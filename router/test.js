/**
 * Created by gsh on 2017/9/9.
 */

const express = require('express');
let rander = require('../rander');
let router = express.Router();
let file = {
  index:'./view/test/index.html',
  test2:'./view/test/test2.html'
}


router.get('/index',(req,res,next)=>{
  rander(req,res,file.index);
})
router.get('/test2',(req,res,next)=>{
  rander(req,res,file.test2);
})


// 动态生成路由，根据输入的二层url来判断  如果在file中有对应的话 则生成router.get()
// 问题： url对象在哪

module.exports = router;