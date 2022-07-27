const { body } = require("express-validator");

const mentorshipCreateValidation = () => {
  return [
    body("title").isString().withMessage("O título é obrigatório!"),
    body("subject").isString().withMessage("O assunto é obrigatório!"),
    body("description").isString().withMessage("A descrição é obrigatória!"),
    body("numberDesiredStudents")
      .notEmpty()
      .withMessage("O preço é obrigatório!")
      .toInt()
      .isNumeric()
      .withMessage("A quantidade de alunos precisa ser um número!"),
    body("price")
      .notEmpty()
      .withMessage("O preço é obrigatório!")
      .toFloat()
      .isNumeric()
      .withMessage("O preço precisa ser um número!"),
    body("duration")
      .notEmpty()
      .withMessage("O preço é obrigatório!")
      .toFloat()
      .isNumeric()
      .withMessage("O preço precisa ser um número!"),
    body("time").isString().withMessage("O horário é obrigatório!"),
    body("date")
      .notEmpty()
      .withMessage("A data é obrigatória!")
      .toDate()
      .isDate()
      .withMessage("A data precisa estar formatada corretamente!"),
  ];
};

module.exports = { mentorshipCreateValidation };
