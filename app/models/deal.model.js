const pool = require("./db.js")

//конструктор нашего дела

const Deal = function(deal){
	this.text = deal.text;
	this.inner_key = deal.inner_key;
}

const Table = 'deals';
pool.connect()

Deal.getAll =  result => {
	// client.connect()
	const queryAll = `SELECT * FROM ${Table}`;
	 pool.query(queryAll, (err, res) =>{
		 if(err){
			 console.log('да кому есть дело до ошибок');
			 return
		 }
		 console.log("Получены все дела")
		 result(null, res);
	 });
}


Deal.findbyKey = (inner_key, result) => {
	const queryFind = `SELECT * FROM ${Table} WHERE inner_key = ${inner_key}`;
	pool.query(queryFind, (err, res) =>{
		if(err){
			console.log("Ошибка в получении одного дела")
			return;
		}
		console.log("Получено одно дело")
		// console.log(res)
		return(null, res)
	})
}



Deal.create = (newDeal, result) =>{
	// client.connect();
	const queryCreate = "INSERT INTO deals (id, text, inner_key)  VALUES (default, $1, $2)";
	const checkQuery = `SELECT id FROM deals WHERE  text = ?`
	pool.query(queryCreate, [newDeal.text, newDeal.inner_key], (err, res)=>{
		if(err){
			console.log("error", err)
			result(err, null)
			return;
		}
		console.log("дело создано")
		result(null, res)
		// result(null )
		console.log("Создано дело", {id: res.insertId, ...newDeal});
		// result(null, {id:res.insertId, ...newDeal}) // тутачки у нас ответ от сервера
	})
}
module.exports = Deal;


