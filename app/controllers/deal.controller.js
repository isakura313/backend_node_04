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
console.log("попытка создания дела")
if(err)
	res.status(500).send({
		message:
			err.message || "Произошла ошибка"
	});
	else
		res.send(data)
	});
};



