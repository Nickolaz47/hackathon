const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório!")
      .isLength({ min: 5 })
      .withMessage("O nome precisa ter no mínimo 5 caracteres!"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório!")
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("confirmEmail")
      .isString()
      .withMessage("A confirmação do e-mail é obrigatória!")
      .custom((value, { req }) => {
        if (req.body.email !== value) {
          throw new Error("Os e-mails não são iguais!");
        }
        return true;
      }),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 8 })
      .withMessage("A senha precisa ter no mínimo 8 caracteres!"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação da senha é obrigatória!")
      .custom((value, { req }) => {
        if (req.body.password !== value) {
          throw new Error("As senhas não são iguais!");
        }
        return true;
      }),
    body("role").isString().withMessage("Escolha uma das opções!"),
    body("subject")
      .isString()
      .withMessage("O conteúdo a ser mentorado ou buscado é obrigatório!"),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email é obrigatório!")
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("password").isString().withMessage("A senha é obrigatória!"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 5 })
      .withMessage("O nome precisa ter no mínimo 5 caracteres!"),
    body("password")
      .optional()
      .isLength({ min: 8 })
      .withMessage("A senha precisa ter no mínimo 8 caracteres!"),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};
