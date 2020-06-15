const Deal = require("../models/deal.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Тут нет такого контента путник",
    });
  }

  const deal = new Deal({
    text: req.body.text,
    inner_key: req.body.inner_key,
  });

  //Сохраняем наше дело в базу даннных

  Deal.create(deal, (err, data) => {
    console.log(data);
    // console.log(`наша дата сейчас  ${data.rows}`)
    if (err)
      res.status(500).send({
        message: err.message || "Произошла ошибка",
      });
    else res.send("дело создано");
  });
};

exports.findAll = (req, res) => {
  Deal.getAll((err, data) => {
    console.log("Получение всех дел");
    if (err) {
      res.status(500).send({
        message: err.message || "Произошла неизвестная ошибка",
      });
    } else res.status(200).send(data.rows);
  });
};

exports.findOne = (req, res) => {
  Deal.findbyKey(req.params.inner_key, (err, data) => {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: `Нет дела с таким ${inner_key}`,
        });
      } else {
        res.status(500).send({
          message: " ПОчему я должен тебе все объяснять?",
        });
      }
    } else res.send(data.rows[0]);
  });
};

exports.updateOne = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Ты че делаешь с запросами? Без res здесь никуда!",
    });
  }
  console.log(req.body); // вывожу в консолЬ, что бы можно было посмоттреть

  Deal.updateById(
    req.params.inner_key,
    new Deal(req.body), // req это ответ, создаем тело из ответа
    (err, data) => {
      if (err) {
        if (err.kind == "Not found") {
          res.status(404).send({
            message: `Не найдено дело с inner_key ${req.params.inner_key}`,
          });
        } else {
          res.status(500).send({
            message: `Произошла ошибка обновления дела c inner_key ${req.params.inner_key}`,
          });
        }
      } else res.send(data);
    }
  );
};
//Удаляем дело по id
exports.delete = (req, res) => {
  Deal.remove(req.params.inner_key, (err, data) => {
    if (err) {
      if (err.kind == "Not found") {
        res.status(404).send({
          message: `Не найдено дело с inner_key ${req.params.inner_key}`,
        });
      } else {
        res.status(500).send({
          message: `Произошла ошибка удаления дела c inner_key ${req.params.inner_key}`,
        });
      }
    } else res.send({ message: `дело было успешно удалено!` });
  });
};
exports.deleteAll = (req, res) => {
  Deal.removeAll((err, data) => {
    res.status(202).send({
      message: `Дела были удалены`,
    });
  });
};
