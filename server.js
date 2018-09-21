const express = require('express');
const hbs = require('hbs');
const port=process.set.PORT || 3000;
var app=express();

var body={

    pageTitle:'title in all pages',

};
hbs.registerPartials(__dirname +'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear() ;
});
app.set('view engine','hbs');
app.use(express.static(__dirname +'/public'));

// app.use((req,res,next)=>{
//   res.render('newmiddel.hbs');
// });
app.get('/project',(req,res)=>{
  res.render('home.hbs');
});
app.get('/',(req,res)=>{
res.render('home.hbs',{
  body,
  welcome:'welcome to our web site'
});

});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{body} );
//  res.send('<h1>hello world</h>');

});
app.listen(port);
