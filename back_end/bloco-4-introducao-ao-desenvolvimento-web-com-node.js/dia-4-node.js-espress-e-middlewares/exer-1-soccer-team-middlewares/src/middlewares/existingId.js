const teams = require('../../teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (!teams.some((t) => t.id === id)) {
    return res.status(404).json({ message: 'Time não encontrado' });
  }
  next();
};

module.exports = existingId;

// const { nome, sigla } = req.body;
// if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório'});
// if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório'});
// next();