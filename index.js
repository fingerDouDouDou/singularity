/**
 * Created by gsh on 2017/8/26.
 */
const TEXT = 'text/plain';
const Vue = require('vue')
const fs = require('fs');
const server = require('express')();
// const renderer = require('vue-server-renderer').createRenderer({
//   template: fs.readFileSync('./index.template.html', 'utf-8')
// });
// const app = new Vue({
//   template: fs.readFileSync('./view/onlyTest.html','utf-8')
// })

server.set('port', process.env.PORT || 3000);
// console.log(require('./router/index.js'))

server.use('/',require('./router/index'))//定义路由

// server.get('/index', (req, res) => {
//   console.log('进来了')
//   renderer.renderToString(app,{title:'第一个奇点vueSsr页面'}, (err, html) => {
//     if (err) throw err
//     console.log(html)
//     res.end(html);
//   })
// })


server.use((req,res)=>{
  res.type(TEXT);
  res.status(404);
  res.send('not foundddddddddd')
})

server.use((err,req,res,next)=>{
  console.error(err.stack)
  res.type(TEXT);
  res.status(500);
  res.send('some bad things happend');

})

server.listen(server.get('port'),()=>{
  console.log('salkdfjlksadjflkjsdalkfjlkdsajlfkjsdalkjflksdjflkdsjlkgjaskldjflksdjflk ')
})