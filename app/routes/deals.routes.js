module.exports = app =>{
	const deals = require("../controllers/deal.controller.js")

	//Создание нового дела
	app.get("/deals", deals.findAll );
	app.get("/deals/:dealId", deals.findOne)
	app.post("/deals", deals.create);

	//здесь у нас будут остальные запросы

	//get


	// update


	//deleteAll - сброс всех дел


	//delete


}