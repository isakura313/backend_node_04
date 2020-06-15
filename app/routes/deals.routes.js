module.exports = app =>{
	const deals = require("../controllers/deal.controller.js")

	//Создание нового дела
	app.get("/deals", deals.findAll );
	app.get("/deals/:dealId", deals.findOne)
	app.post("/deals", deals.create);
	app.put("/deals/:inner_key", deals.updateOne) // обновляем наши дела по Id
	app.delete("/deals/:inner_key", deals.delete) // удаляем дела по ключу
	app.delete("/deals", deals.deleteAll)  //здесь у нас происходит сброс всех дел

}