const express = require('express')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 8080; //порт либо 8080 либо можно взтять его из окружения

const bodyParser = require('body-parser')


const app = express()

app.use(cors())

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
	console.log(`Произошел старт сервера http://localhost:8080`);
})






