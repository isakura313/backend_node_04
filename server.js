const express = require('express')
const favicon = require('express-favicon')
const path = require('path')

const port = process.env.PORT || 8080; //порт либо 8080 либо можно взтять его из окружения


 //типичный express у нас начинается с создания экземпляра сервера
 const app = express()

 app.use(favicon(__dirname + '/build/favicon.png'))
 app.use(express.static(path.join(__dirname, 'build')))


 //простой тест сервера
// дело в том что heroku глушит сервера, к которым не происходит запрос
// и нужно сформировать искуственный спрос)))

app.get('/ping', function(req, res){
	return res.send('pong');
})



app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.listen(port, funciton = () =>{
	console.log("Произошел старт сервера");
})






