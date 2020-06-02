const Deal = require("../models/deal.model.js")


exports.create = (req,res)=>{

if(!req.body){
	res.status(400).send({
		message: "Тут нет такого контента путник"
	})
}


const deal = new Deal({
	'text': req.body.text,
	'inner_key': req.body.inner_key
})



//Сохраняем наше дело в базу даннных

Deal.create(deal, (err, data)=>{
console.log(data)
// console.log(`наша дата сейчас  ${data.rows}`)
if(err)
	res.status(500).send({
		message:
			err.message || "Произошла ошибка"
	});
	else
		res.send("дело создано")
	});


};

exports.findAll = (req, res) =>{
Deal.getAll((err, data)=>{
	console.log("Получение всех дел");
	if (err){
		res.status(500).send({
			message:
			err.message || "Произошла неизвестная ошибка"
		});
		
	}else res.status(200).send(
		data.rows
	)
});
}

exports.findOne  = (req, res) =>{
	Deal.findbyKey(req.params.dealId, (err, data)=>{
		console.log(`Выведи нам ${data}`)
		if(err){
			if(err.kind == "not_found"){
				res.status(404).send({
					message: `Нет дела с таким id`
				});
			} else{
				res.status(500).send({
					message: " ПОчему я должен тебе все объяснять?"
				})
			} 
		}else res.send(data.rows[0])
	})
}




