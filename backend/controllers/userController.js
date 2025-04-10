const db = require('../db');
const { validationResult } = require('express-validator');

exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(results[0]);
  });
};

exports.createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { nome, email, telefone, data_nascimento, cpf } = req.body;
  db.query(
    'INSERT INTO users (nome, email, telefone, data_nascimento, cpf) VALUES (?, ?, ?, ?, ?)',
    [nome, email, telefone, data_nascimento, cpf],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  );
};

exports.updateUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { nome, email, telefone, data_nascimento, cpf } = req.body;
  const id = req.params.id;

  db.query(
    'UPDATE users SET nome = ?, email = ?, telefone = ?, data_nascimento = ?, cpf = ? WHERE id = ?',
    [nome, email, telefone, data_nascimento, cpf, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
      res.json({ id, ...req.body });
    }
  );
};

exports.deleteUser = (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json({ message: 'Usuário removido com sucesso' });
  });
};
