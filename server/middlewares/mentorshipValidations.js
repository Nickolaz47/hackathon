const { body } = require("express-validator");

const mentorshipCreateValidation = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("O título é obrigatório!")
      .isString()
      .withMessage("O título é obrigatório!"),
    body("subject")
      .notEmpty()
      .withMessage("O assunto é obrigatório!")
      .isString()
      .withMessage("O assunto é obrigatório!"),
    body("description")
      .notEmpty()
      .withMessage("A descrição é obrigatória!")
      .isString()
      .withMessage("A descrição é obrigatória!"),
    body("numberDesiredStudents")
      .notEmpty()
      .withMessage("A quantidade de alunos é obrigatória!")
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
      .withMessage("A duração é obrigatória!")
      .toFloat()
      .isNumeric()
      .withMessage("A duração precisa ser um número!"),
    body("time")
      .notEmpty()
      .withMessage("O horário é obrigatório!")
      .isString()
      .withMessage("O horário é obrigatório!"),
    body("date")
      .notEmpty()
      .withMessage("A data é obrigatória!")
      .isISO8601()
      .toDate()
      .withMessage("A data precisa estar formatada corretamente!"),
  ];
};

const mentorshipUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .notEmpty()
      .withMessage("Título inválido!")
      .isString()
      .withMessage("Título inválido!"),
    body("subject")
      .optional()
      .notEmpty()
      .withMessage("Assunto inválido!")
      .isString()
      .withMessage("Assunto inválido!"),
    body("description")
      .optional()
      .notEmpty()
      .withMessage("Descrição inválida!")
      .isString()
      .withMessage("Descrição inválida!"),
    body("numberDesiredStudents")
      .optional()
      .notEmpty()
      .withMessage("Quantidade de alunos inválida!")
      .toInt()
      .isNumeric()
      .withMessage("Quantidade de alunos inválida!"),
    body("price")
      .optional()
      .notEmpty()
      .withMessage("Preço inválido!")
      .toFloat()
      .isNumeric()
      .withMessage("Preço inválido!"),
    body("duration")
      .optional()
      .notEmpty()
      .withMessage("Duração inválida!")
      .toFloat()
      .isNumeric()
      .withMessage("Duração inválida!"),
    body("time")
      .optional()
      .notEmpty()
      .withMessage("Horário inválido!")
      .isString()
      .withMessage("Horário inválido!"),
    body("date")
      .optional()
      .notEmpty()
      .withMessage("Data inválida!")
      .isISO8601()
      .toDate()
      .withMessage("Data inválida!"),
  ];
};

module.exports = { mentorshipCreateValidation, mentorshipUpdateValidation };
