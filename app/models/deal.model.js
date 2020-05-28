const sql = require("./db.js")

//конструктор нашего дела

const Deal = function(deal){
	this.text = deal.text;
	this.inner_key = deal.inner_key;
}

const Table = 'deals';


Deal.create = (newDeal, result) =>{
	const queryCreate = `INSERT INTO ${Table} VALUES(NULL, ?)`;

	sql.query(queryCreate, newDeal, (err, res)=>{
		if(err){
			console.log("error", err)
			result(err, null)
			return;
		}

		console.log("Создано дело", {id: res.insertId, ...newDeal});
		result(null, {id:res.insertId, ...newDeal})
	})
}
module.exports = Deal;


