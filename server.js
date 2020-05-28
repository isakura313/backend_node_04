const express = require('express')
const favicon = require('express-favicon')
const path = require('path')

const port = process.env.PORT || 8080; //порт либо 8080 либо можно взтять его из окружения

const bodyParser = require('body-parser')

 //типичный express у нас начинается с создания экземпляра сервера
 const app = express()


// мы убираем статитику, потому что у нас теперь это приложение работает на Rest API
 // app.use(favicon(__dirname + '/build/favicon.png'))
 


 //простой тест сервера
// дело в том что heroku глушит сервера, к которым не происходит запрос
// и нужно сформировать искуственный спрос)))

// app.get('/ping', function(req, res){
// 	return res.send('pong');
// })



app.use(bodyParser.json())
//используем body-parser для того, чтобы отдавать наше rest api в json

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))



app.use(bodyParser.urlencoded({extended: true}))
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

require("./app/routes/deals.routes.js")(app);


app.listen(port, funciton = () =>{
	console.log("Произошел старт сервера");
})






