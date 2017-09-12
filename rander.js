/**
 * Created by gsh on 2017/9/9.
 */
const fs = require('fs');
const Vue = require('vue');

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
});
//
// const app = new Vue({
//   template: fs.readFileSync('./view/onlyTest.html','utf-8')
// })

module.exports = (req,res,file)=>{
  let app = (()=>{
    return new Vue({
      template: fs.readFileSync(file,'utf-8')
    })
  })();


  renderer.renderToString(app,{title:'第一个奇点vueSsr页面'}, (err, html) => {
    if (err) throw err
    console.log(html)
    res.end(html);
  })
}