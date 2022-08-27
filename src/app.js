const path = require('path');
const express = require('express');
const app = express();
const chalk = require('chalk');
const hbs = require('hbs');

const public = path.join(__dirname,'..','public');
const views = path.join(__dirname,'../templates/views');
const partials = path.join(__dirname,'../templates/partials');

hbs.registerPartials(partials);
app.set('views', views);
app.set('view engine', 'hbs'); // setting hbs
app.use(express.static(public)); // make public as static files folder

app.get('',(req, resp)=>{
  resp.render('index', {
      title: 'Weather',
      name: 'Mahesh Pal',
      createdBy: 'Mahesh Pal'
  });
});

app.get('/about', (req, res)=>{
  res.render('about', {
      title: 'THis is an about page',
      createdBy: 'Mahesh Pal'
  });
});

app.get('/help', (req, res)=>{
    res.render('help', {
        title: ' This is a help page',
        createdBy: 'Mahesh Pal'
    });
});

app.get('/checkWeather', (req, res)=>{
  res.render('weather');
});

app.get('/weather', (req, res)=>{
    const address = req.query.address;
    if(!address) {
        res.send({
          error: 'Provide an address',
        })
    }else 
    res.send({
        temp: 50,
        forecast: 'Let ur AC out',
        address,
    });
});

app.get('*', (req, res)=>{
  res.send('This URL is Not yet implemented');
});
app.listen(3000, ()=>{
    console.log(chalk.green.bold(' server started'));
});