var express = require('express');
var app = express();
var axios = require('axios');

function getRandomComic(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


app.use('/static', express.static('public'));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    var comicNumber = 0;
    const comicFirst = "https://xkcd.com/";
    const comicSecond = "/info.0.json"
    comicNumber = getRandomComic(1, 2682);
    const comicFull = `${comicFirst}${comicNumber}${comicSecond}`;
    
    axios.get(comicFull).then(function(response){
        res.render('comic.ejs', {comicData: response.data});
    })
    
})

app.listen(3000, function(){
    console.log('App listening on port 3000')
})