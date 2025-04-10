const express = require('express');
const { body } = require('express-validator');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post(
  '/',
  [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
    body('data_nascimento').isISO8601().withMessage('Data de nascimento inválida'),
    body('cpf').isLength({ min: 11, max: 11 }).withMessage('CPF deve ter 11 dígitos'),
  ],
  createUser
);
router.put(
  '/:id',
  [
    body('nome').optional().notEmpty().withMessage('Nome não pode ser vazio'),
    body('email').optional().isEmail().withMessage('Email inválido'),
    body('telefone').optional().notEmpty().withMessage('Telefone não pode ser vazio'),
    body('data_nascimento').optional().isISO8601().withMessage('Data de nascimento inválida'),
    body('cpf').optional().isLength({ min: 11, max: 11 }).withMessage('CPF deve ter 11 dígitos'),
  ],
  updateUser
);
router.delete('/:id', deleteUser);

module.exports = router;
